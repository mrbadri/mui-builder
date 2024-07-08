import { useMemo } from 'react';
import { useController, useWatch } from 'react-hook-form';

import useQueryBuilder from '@mui-builder/utils/useQueryBuilder/useQueryBuilder';
import UseScript from '@mui-builder/utils/useScript/useScript';

import axios from 'axios';

import { AutoCompleteOptions, AutoCompleteProps } from './autoComplete.types';

import useForms from '../../../hooks/useForms/useForms';
import usePropsController from '../../../hooks/usePropsController/usePropsController';
import useRule from '../../../hooks/useRule/useRule';

const useAutoComplete = (props: AutoCompleteProps<AutoCompleteOptions>) => {
  const {
    formId,
    script,
    api,
    show = true,
    dependencies,
    defaultValue,
    options,
    innerTextFieldProps,
    ...restAutoCompleteProps
  } = props;

  const { configs, queries } = api || {};

  const { forms } = useForms();
  const formMethod = forms?.[formId];

  const { setProps, propsController } = usePropsController();
  const newProps = propsController?.[restAutoCompleteProps?.id] || {};

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
    name: dependencies ?? [],
  });

  // Controller
  const {
    field,
    formState: { errors },
  } = useController({
    name: restAutoCompleteProps.id,
    control: formMethod.control,
    disabled: restAutoCompleteProps.disabled,
    rules: useRule(restAutoCompleteProps?.rule),
    defaultValue,
  });

  const error = errors?.[restAutoCompleteProps.id];

  // Handle Script
  const { scriptResult } = UseScript({
    script,
    formMethod,
    forms,
    formId,
    setProps,
  });

  // Props Methods
  // -- Handle Option
  const getOptionLabel = (option: AutoCompleteOptions) => option?.name ?? '';

  const isOptionEqualToValue = (
    option: AutoCompleteOptions,
    value: AutoCompleteOptions
  ) => option.id === value.id;

  const onChange: AutoCompleteProps<AutoCompleteOptions>['onChange'] = (
    _,
    value
  ) => {
    field.onChange(value ?? null);
  };

  const hanldeHelperText = () =>
    (error?.message as string) ?? innerTextFieldProps?.helperText ?? null;

  // Props
  const getFieldProps = () => ({
    ...field,
    value: field.value ?? null,
    onChange: onChange,
    isOptionEqualToValue,
    getOptionLabel,
    error: error,
    options,
    ...restAutoCompleteProps,
    ...scriptResult,
    ...newProps,
  });

  const getInnerTextFieldProps = () => ({
    ...innerTextFieldProps,
    helperText: hanldeHelperText(),
  });

  return { getFieldProps, show, getInnerTextFieldProps };
};

export default useAutoComplete;
