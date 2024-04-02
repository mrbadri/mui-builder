import { FieldValues } from 'react-hook-form';
import useForms from '../../../hooks/useForms/useForms';
import { SubmitFieldProps, DynamicAction } from './submit.types';
import { useCallback } from 'react';
import { convertFn } from '@mui-builder/utils';
import useQueryBuilder from '../../../hooks/useQueryBuilder/useQueryBuilder';
import axios from 'axios';

const useSubmit = (props: SubmitFieldProps) => {
  const { formId, children, onAction, api, ...submitFieldProps } = props;
  const { configs, queries } = api || {};

  const forms = useForms((state) => state.forms);
  const formMethod = forms[formId];

  // API Call
  const { refetch, isLoading } = useQueryBuilder({
    apiInstance: axios,
    apiConfigs: configs || {},
    apiQuery: queries || {},
    formMethod,
    formId,
    forms,
  });

  // Funtionality
  const dynamicActionFn = useCallback<DynamicAction>(
    (formMethod, forms, formId, values) => {
      convertFn<DynamicAction>(
        onAction,
        'formMethod',
        'forms',
        'formId',
        'values'
      )(formMethod, forms, formId, values);
    },
    [onAction]
  );

  // Handle Submit
  const onSubmit = (values: FieldValues) => {
    dynamicActionFn(formMethod, forms, formId, values);
    if (api) refetch();
  };

  // Handle On CLick
  const onClick = formMethod.handleSubmit(onSubmit);

  // props
  const getActionProps = () => ({
    onClick,
    loading: isLoading,
    ...submitFieldProps,
  });

  return { children, getActionProps };
};

export default useSubmit;
