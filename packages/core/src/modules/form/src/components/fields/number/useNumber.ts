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
  const formatNumber = (value: string) => {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  // Handle changes to the input field
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Remove existing commas from the input value
    const rawValue = event.target.value.replace(/,/g, '');
    // Check if the value is a valid number before calling onChange
    if (!isNaN(Number(rawValue))) {
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

  // Props
  const getFieldProps = () => ({
    ...field,
    ...numberFieldProps,
    helperText: error?.message ?? helperText,
    error: !!error,
    ...scriptResult,
    ...newProps,
    value: formatNumber(field.value ?? ''),
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleChange(e),
  });

  return { getFieldProps, show };
};

export default UseNumberField;
