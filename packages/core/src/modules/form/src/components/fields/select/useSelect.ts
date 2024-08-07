import { useController, useWatch } from 'react-hook-form';

import { InputLabelProps, MenuItemProps } from '@mui/material';
import { SelectInputProps } from '@mui/material/Select/SelectInput';

import useQueryBuilder from '@mui-builder/utils/useQueryBuilder/useQueryBuilder';
import useScript from '@mui-builder/utils/useScript/useScript';

import axios from 'axios';

import { Option } from '../../../types/public.types';
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
    dependencies,
    formControlProps,
    inputLabelProps,
    options,
    ...restSelectProps
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
    label: inputLabelProps.children,
    labelId: inputLabelProps.children,
  });
  const getInputLableProps = (): InputLabelProps => ({
    ...inputLabelProps,
  });

  const getFormControlProps = () => ({
    ...formControlProps,
  });

  const getMenuItemProps = (item: Option): MenuItemProps => ({
    key: `select-${item.id}`,
    id: item.id.toString(),
    // TODO: adapte with autocomplete value
    value: item.id,
    title: item.name,
  });

  return {
    options,
    getSelectProps,
    getMenuItemProps,
    getInputLableProps,
    getFormControlProps,
  };
};

export default useSelect;
