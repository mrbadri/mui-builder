import { convertFunction } from '@mui-builder/utils';
import { Button } from '@mui/material';
import { FC, useCallback } from 'react';
import { FieldValues } from 'react-hook-form';
import useForms from '../../../hooks/useForms/useForms';
import { ActionSubmitFieldProps, DynamicAction } from './submit.types';

const ActionSubmit: FC<ActionSubmitFieldProps> = ({
  formId,
  children,
  onAction,
  ...submitFieldProps
}) => {
  const forms = useForms((state) => state.forms);
  const formMethods = forms[formId];

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

  return (
    <Button {...submitFieldProps} onClick={formMethods.handleSubmit(onSubmit)}>
      {children}
    </Button>
  );
};

export default ActionSubmit;
