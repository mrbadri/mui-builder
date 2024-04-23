import { useController, useWatch } from 'react-hook-form';

import useQueryBuilder from '@mui-builder/utils/useQueryBuilder/useQueryBuilder';
import UseScript from '@mui-builder/utils/useScript/useScript';

import axios from 'axios';

import { CheckboxProps } from './checkbox.types';

import useForms from '../../../hooks/useForms/useForms';
import usePropsController from '../../../hooks/usePropsController/usePropsController';

const useCheckbox = (props: CheckboxProps) => {
  const {
    checkboxProps,
    formControlLabelProps,
    formId,
    script,
    api,
    show = true,
    dependesies,
    ...CheckboxProps
  } = props;

  const { configs, queries } = api || {};

  const { forms } = useForms();
  const formMethod = forms?.[formId];
  const { setProps, propsController } = usePropsController();

  const newProps = propsController?.[CheckboxProps?.id] || {};

  // Handle Script
  const { scriptResult } = UseScript({
    script,
    formMethod,
    forms,
    formId,
    setProps,
  });

  // Handle Wtach Fields
  useWatch({
    control: formMethod.control,
    name: dependesies ?? [],
  });

  // API Call
  useQueryBuilder({
    apiInstance: axios,
    apiConfigs: configs ?? {},
    apiQuery: queries ?? {},
    formMethod,
    formId,
    forms,
  });

  // Controller
  const {
    field,
    formState: { errors },
  } = useController({
    name: CheckboxProps.id,
    control: formMethod.control,
    disabled: checkboxProps.disabled,
    // rules: useRule(checkboxProps?.rule),
  });

  const error = errors?.[CheckboxProps.id];

  // Props

  const getFormControlLabelProps = () => ({
    ...field,
    ...formControlLabelProps,
    error: error,
    value: field.value ?? '',
    ...scriptResult,
    ...newProps,
  });

  const getCheckboxProps = () => ({
    ...checkboxProps,
  });

  return { getCheckboxProps, getFormControlLabelProps };
};

export default useCheckbox;
