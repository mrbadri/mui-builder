import { useController } from 'react-hook-form';
import useForms from '../../../hooks/useForms/useForms';
import UseScript from '../../../hooks/useScript/useScript';
import { TextProps } from './text.types';
import useQueryBuilder from '../../../hooks/useQueryBuilder/useQueryBuilder';
import axios from 'axios';

const UseText = (props: TextProps) => {
  const { formId, script, api, ...textFieldProps } = props;
  const { configes, queries } = api || {};

  const { forms } = useForms();
  const formMethod = forms?.[formId];

  const { scriptResult } = UseScript({
    script,
    formMethod,
    forms,
    formId,
  });

  console.count('Render');

  // API Call
  useQueryBuilder({
    apiInstance: axios,
    apiConfigs: configes || {},
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
