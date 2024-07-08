import { useController, useWatch } from 'react-hook-form';

import useQueryBuilder from '@mui-builder/utils/useQueryBuilder/useQueryBuilder';
import useScript from '@mui-builder/utils/useScript/useScript';

import axios from 'axios';

import { CheckboxProps } from './checkbox.types';

import useForms from '../../../hooks/useForms/useForms';
import usePropsController from '../../../hooks/usePropsController/usePropsController';
import useRule from '../../../hooks/useRule/useRule';

const useCheckbox = (props: CheckboxProps) => {
  const {
    id,
    api,
    rule,
    script,
    formId,
    show = true,
    dependencies,
    checkboxProps,
    ...formControlLabelProps
  } = props;

  const { configs, queries } = api || {};

  const { forms } = useForms();
  const formMethod = forms?.[formId];
  const { setProps, propsController } = usePropsController();

  const newProps = propsController?.[id] || {};

  // Handle Script
  const { scriptResult } = useScript({
    script,
    formMethod,
    forms,
    formId,
    setProps,
  });

  // Handle Watch Fields
  useWatch({
    control: formMethod.control,
    name: dependencies ?? [],
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
    name: id,
    control: formMethod.control,
    disabled: checkboxProps.disabled,
    defaultValue: !!checkboxProps.checked,
    rules: useRule(rule),
  });

  const error = errors?.[id];

  // Props
  const getFormControlLabelProps = () => ({
    ...field,
    error: error,
    ...scriptResult,
    ...newProps,
    ...formControlLabelProps,
  });

  const getCheckboxProps = () => ({
    ...checkboxProps,
  });

  return { show, getCheckboxProps, getFormControlLabelProps };
};

export default useCheckbox;
