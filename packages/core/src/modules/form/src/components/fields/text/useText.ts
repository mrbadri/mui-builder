import { useController, useWatch } from 'react-hook-form';

import useQueryBuilder from '@mui-builder/utils/useQueryBuilder/useQueryBuilder';
import useScript from '@mui-builder/utils/useScript/useScript';

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
    dependencies,
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
