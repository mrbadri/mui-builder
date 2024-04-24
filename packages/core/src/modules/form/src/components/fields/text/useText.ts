import { useController, useWatch } from 'react-hook-form';

import useQueryBuilder from '@mui-builder/utils/useQueryBuilder/useQueryBuilder';
import UseScript from '@mui-builder/utils/useScript/useScript';

import axios from 'axios';

import { TextProps } from './text.types';

import useForms from '../../../hooks/useForms/useForms';
import usePropsController from '../../../hooks/usePropsController/usePropsController';
import useRule from '../../../hooks/useRule/useRule';

const UseText = (props: TextProps) => {
  const {
    formId,
    script,
    api,
    show = true,
    dependesies,
    helperText,
    defaultValue,
    ...textFieldProps
  } = props;
  const { configs, queries } = api || {};

  const { forms } = useForms();
  const formMethod = forms?.[formId];
  const { setProps, propsController } = usePropsController();

  const newProps = propsController?.[textFieldProps?.id] || {};

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
    name: textFieldProps.id,
    control: formMethod.control,
    disabled: textFieldProps.disabled,
    rules: useRule(textFieldProps?.rule),
    defaultValue,
  });

  const error = errors?.[textFieldProps.id];

  // Props
  const getFieldProps = () => ({
    ...field,
    ...textFieldProps,
    helperText: error?.message ?? helperText,
    error: !!error,
    value: field.value ?? '',
    ...scriptResult,
    ...newProps,
  });

  return { getFieldProps, show };
};

export default UseText;
