import { useController, useWatch } from 'react-hook-form';
import useForms from '../../../hooks/useForms/useForms';
import UseScript from '../../../hooks/useScript/useScript';
import { TextProps } from './text.types';
import useQueryBuilder from '../../../hooks/useQueryBuilder/useQueryBuilder';
import axios from 'axios';

const UseText = (props: TextProps) => {
  const { formId, script, api, dependesies, ...textFieldProps } = props;
  const { configs, queries } = api || {};

  const { forms } = useForms();
  const formMethod = forms?.[formId];

  const { scriptResult } = UseScript({
    script,
    formMethod,
    forms,
    formId,
  });

  // Handle Wtach Fields
  useWatch({
    control: formMethod.control,
    name: dependesies ?? [],
  });

  // API Call
  useQueryBuilder({
    apiInstance: axios,
    apiConfigs: configs || {},
    apiQuery: queries || {},
    formMethod,
    formId,
    forms,
  });

  const { field } = useController({
    name: textFieldProps.id,
    control: formMethod.control,
  });

  const getFieldProps = () => ({
    ...field,
    ...textFieldProps,
    value: field.value ?? '',
    ...scriptResult,
  });

  return { getFieldProps };
};

export default UseText;
