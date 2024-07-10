import { useController, useWatch } from 'react-hook-form';

import useQueryBuilder from '@mui-builder/utils/useQueryBuilder/useQueryBuilder';
import useScript from '@mui-builder/utils/useScript/useScript';

import axios from 'axios';

import { Option } from '../../../types/public.types';
import { AutoCompleteProps } from './autoComplete.types';

import useForms from '../../../hooks/useForms/useForms';
import usePropsController from '../../../hooks/usePropsController/usePropsController';
import useRule from '../../../hooks/useRule/useRule';

const useAutoComplete = (props: AutoCompleteProps<Option>) => {
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

  // Handle Watch Fields
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
  const { scriptResult } = useScript({
    script,
    formMethod,
    forms,
    formId,
    setProps,
  });

  // Props Methods
  // -- Handle Option
  const getOptionLabel = (option: Option) => option?.name ?? '';

  const isOptionEqualToValue = (option: Option, value: Option) =>
    option.id === value.id;

  const onChange: AutoCompleteProps<Option>['onChange'] = (_, value) => {
    field.onChange(value ?? null);
  };

  const handleHelperText = () =>
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
    helperText: handleHelperText(),
  });

  return { getFieldProps, show, getInnerTextFieldProps };
};

export default useAutoComplete;
