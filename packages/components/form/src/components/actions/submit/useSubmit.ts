import { FieldValues } from 'react-hook-form';
import useForms from '../../../hooks/useForms/useForms';
import { SubmitFieldProps, DynamicAction } from './submit.types';
import { useCallback } from 'react';
import { convertFn } from '@mui-builder/utils';

const useSubmit = (props: SubmitFieldProps) => {
  const { formId, children, onAction, ...submitFieldProps } = props;

  const forms = useForms((state) => state.forms);
  const formMethod = forms[formId];

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

  const onSubmit = (values: FieldValues) => {
    dynamicActionFn(formMethod, forms, formId, values);
  };

  const onClick = formMethod.handleSubmit(onSubmit);

  // props
  const getActionProps = () => ({
    onClick,
    ...submitFieldProps,
  });

  return { children, getActionProps };
};

export default useSubmit;
