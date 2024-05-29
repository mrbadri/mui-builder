import { useController, useWatch } from 'react-hook-form';

import useQueryBuilder from '@mui-builder/utils/useQueryBuilder/useQueryBuilder';
import UseScript from '@mui-builder/utils/useScript/useScript';

import axios from 'axios';

import { RadioGroupProps } from './radio.types';

import useForms from '../../../hooks/useForms/useForms';
import usePropsController from '../../../hooks/usePropsController/usePropsController';
import useRule from '../../../hooks/useRule/useRule';

const useRadioGroup = (props: RadioGroupProps) => {
  const {
    id,
    api,
    script,
    formId,
    show = true,
    dependesies,
    defaultValue,
    radioInputsList,
    ...restRadioGroupProps
  } = props;

  const { configs, queries } = api || {};

  const { forms } = useForms();
  const formMethod = forms?.[formId];

  const { setProps, propsController } = usePropsController();
  const newProps = propsController?.[id] || {};

  useQueryBuilder({
    apiInstance: axios,
    apiConfigs: configs ?? {},
    apiQuery: queries ?? {},
    formMethod,
    formId,
    forms,
  });

  // Handle Wtach Fields
  useWatch({
    control: formMethod.control,
    name: dependesies ?? [],
  });

  // Controller
  const {
    field,
    formState: { errors },
  } = useController({
    name: id,
    control: formMethod.control,
    // disabled: restRadioGroupProps.disabled,
    rules: useRule(restRadioGroupProps?.rule),
    defaultValue,
  });

  const error = errors?.[id];

  // Handle Script
  const { scriptResult } = UseScript({
    script,
    formMethod,
    forms,
    formId,
    setProps,
  });

  const getRadioGroupProps = () => ({
    ...field,
    ...restRadioGroupProps,
    error,
    ...scriptResult,
    ...newProps,
  });

  return { getRadioGroupProps, radioInputsList };
};

export default useRadioGroup;
