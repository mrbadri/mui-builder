import { useMemo } from 'react';
import { useController, useWatch } from 'react-hook-form';

import useQueryBuilder from '@mui-builder/utils/useQueryBuilder/useQueryBuilder';
import UseScript from '@mui-builder/utils/useScript/useScript';

import axios from 'axios';

import { AutoCompleteProps } from './autoComplete.types';

import useForms from '../../../hooks/useForms/useForms';
import usePropsController from '../../../hooks/usePropsController/usePropsController';
import useRule from '../../../hooks/useRule/useRule';

const useAutoComplete = (props: AutoCompleteProps<any>) => {
  const {
    formId,
    script,
    api,
    show = true,
    dependesies,
    defaultValue,
    options,
    innerTextFieldProps,
    ...autoCompleteProps
  } = props;

  const { configs, queries } = api || {};

  const { forms } = useForms();
  const formMethod = forms?.[formId];

  console.log(formMethod.getValues());

  const { setProps, propsController } = usePropsController();
  const newProps = propsController?.[autoCompleteProps?.id] || {};

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
    name: autoCompleteProps.id,
    control: formMethod.control,
    disabled: autoCompleteProps.disabled,
    rules: useRule(autoCompleteProps?.rule),
    defaultValue,
  });

  // Handle Script
  const { scriptResult } = UseScript({
    script,
    formMethod,
    forms,
    formId,
    setProps,
  });

  const error = errors?.[autoCompleteProps.id];

  //Value
  const selectedValues = useMemo(
    () =>
      options.filter((v: any) => {
        console.log(v);
        return v.value;
      }),
    [options]
  );

  const getOptionLabel = (option: any) => {
    return option.label ?? ''
  }

  // Props
  const getFieldProps = () => ({
    ...field,
    ...autoCompleteProps,
    ...scriptResult,
    ...newProps,
    // helperText: error?.message,
    error: error,
    value: field.value,
    options,
    getOptionLabel
  });

  return { getFieldProps, show, innerTextFieldProps };
};

export default useAutoComplete;
