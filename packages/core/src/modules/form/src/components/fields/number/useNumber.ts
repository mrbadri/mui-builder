import { useController, useWatch } from 'react-hook-form';

import useQueryBuilder from '@mui-builder/utils/useQueryBuilder/useQueryBuilder';
import UseScript from '@mui-builder/utils/useScript/useScript';

import axios from 'axios';

import { NumberFieldProps } from './number.types';

import useForms from '../../../hooks/useForms/useForms';
import usePropsController from '../../../hooks/usePropsController/usePropsController';
import useRule from '../../../hooks/useRule/useRule';

const UseNumberField = (props: NumberFieldProps) => {
  const {
    formId,
    script,
    api,
    show = true,
    dependesies,
    helperText,
    defaultValue,
    onChange,
    seperator,
    ...numberFieldProps
  } = props;
  const { configs, queries } = api || {};

  const { forms } = useForms();
  const formMethod = forms?.[formId];
  const { setProps, propsController } = usePropsController();

  const newProps = propsController?.[numberFieldProps?.id] || {};

  // Handle Script
  const { scriptResult } = UseScript({
    script,
    formMethod,
    forms,
    formId,
    setProps,
  });

  // Function to format the number with thousands separators
  const formatNumber = (value: string, seperator: string) => {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, seperator);
  };

  // Handle changes to the input field
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let rawValue = event.target.value;

    // Remove existing commas from the input value
    if (seperator) {
      const regex = new RegExp(seperator);
      rawValue = event.target.value.replace(regex, '');
    }

    // Check if the value is a valid number before calling onChange
    if (!Number.isNaN(Number(rawValue))) {
      formMethod.setValue(numberFieldProps.id, rawValue);
    }
  };

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
    name: numberFieldProps.id,
    control: formMethod.control,
    disabled: numberFieldProps.disabled,
    rules: useRule(numberFieldProps?.rule),
    defaultValue,
  });

  const error = errors?.[numberFieldProps.id];
  const value = seperator
    ? formatNumber(field.value ?? '', seperator)
    : field.value;

  // Props
  const getFieldProps = () => ({
    ...field,
    ...numberFieldProps,
    helperText: error?.message ?? helperText,
    error: !!error,
    ...scriptResult,
    ...newProps,
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleChange(e),
  });

  return { getFieldProps, show };
};

export default UseNumberField;
