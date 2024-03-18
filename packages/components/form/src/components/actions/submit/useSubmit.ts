import { FieldValues } from 'react-hook-form';
import useForms from '../../../hooks/useForms/useForms';
import { SubmitFieldProps, DynamicAction } from './submit.types';
import { useCallback } from 'react';
import { convertFunction } from '@mui-builder/utils';

const useSubmit = (props: SubmitFieldProps) => {
  const { formId, children, onAction, ...submitFieldProps } = props;

  const forms = useForms((state) => state.forms);
  const formMethods = forms[formId];

  // Funtionality
  const dynamicActionFn = useCallback<DynamicAction>(
    (formMethods, forms, formId, values) => {
      convertFunction<DynamicAction>(
        onAction,
        'formMethods',
        'forms',
        'formId',
        'values'
      )(formMethods, forms, formId, values);
    },
    [onAction]
  );

  const onSubmit = (values: FieldValues) => {
    dynamicActionFn(formMethods, forms, formId, values);
  };

  const onClick = formMethods.handleSubmit(onSubmit);

  // props
  const getActionProps = () => ({
    onClick,
    ...submitFieldProps,
  });

  return { children, getActionProps };
};

export default useSubmit;
