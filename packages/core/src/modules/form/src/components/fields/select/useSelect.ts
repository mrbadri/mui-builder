import { useController, useWatch } from 'react-hook-form';

import { SelectInputProps } from '@mui/material/Select/SelectInput';

import useQueryBuilder from '@mui-builder/utils/useQueryBuilder/useQueryBuilder';
import UseScript from '@mui-builder/utils/useScript/useScript';

import axios from 'axios';

import { SelectProps } from './select.types';

import useForms from '../../../hooks/useForms/useForms';
import usePropsController from '../../../hooks/usePropsController/usePropsController';
import useRule from '../../../hooks/useRule/useRule';

const useSelect = (props: SelectProps) => {
  const {
    formId,
    api,
    id,
    script,
    rule,
    dependesies,
    formControlProps,
    inputLableProps,
    menuItemsList,
    ...restSelectProps
  } = props;

  const { configs, queries } = api || {};

  const { forms } = useForms();
  const formMethod = forms?.[formId];
  const { setProps, propsController } = usePropsController();

  const newProps = propsController?.[id] || {};

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
    name: id,
    control: formMethod.control,
    disabled: restSelectProps.disabled,
    defaultValue: restSelectProps.defaultValue,
    rules: useRule(rule),
  });

  const error = errors?.[id];

  const getSelectProps = (): SelectInputProps => ({
    ...(restSelectProps as SelectInputProps),
    ...field,
    error: error,
    ...scriptResult,
    ...newProps,
  });
  const getInputLableProps = () => ({
    children: inputLableProps.title,
    ...inputLableProps,
  });

  const getFormControlProps = () => ({
    ...formControlProps,
  });

  return {
    getSelectProps,
    getInputLableProps,
    getFormControlProps,
    menuItemsList,
  };
};

export default useSelect;
