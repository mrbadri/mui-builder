import { useState } from 'react';
import { useController, useWatch } from 'react-hook-form';

import { IconButtonProps, InputAdornmentProps } from '@mui/material';

import useQueryBuilder from '@mui-builder/utils/useQueryBuilder/useQueryBuilder';
import UseScript from '@mui-builder/utils/useScript/useScript';

import axios from 'axios';

import { PasswordProps } from './password.types';

import useForms from '../../../hooks/useForms/useForms';
import usePropsController from '../../../hooks/usePropsController/usePropsController';
import useRule from '../../../hooks/useRule/useRule';

const UsePassword = (props: PasswordProps) => {
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

  // eye icon
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
    type: showPassword ? 'text' : 'password',
  });

  const getInputAdornmentProps = (): InputAdornmentProps => ({
    position: 'end',
  });

  const getIconButtonProps = (): IconButtonProps => ({
    'aria-label': 'toggle password visibility',
    onClick: handleClickShowPassword,
    edge: 'end',
  });

  return { getFieldProps, show, getInputAdornmentProps, getIconButtonProps, showPassword };
};

export default UsePassword;
