import { Button } from '@mui/material';
import { FC } from 'react';
import { ActionSubmitFieldProps } from './submit.types';
import useForms, { Form } from '../../../hooks/useForms/useForms';
import { FieldValues } from 'react-hook-form';
import { convertFunction } from '@mui-builder/utils';

export type DynamicAction = (
  formMethods: Form,
  forms: Record<string, Form>,
  formId: string,
  Value: FieldValues
) => void;

const ActionSubmit: FC<ActionSubmitFieldProps> = ({
  formId,
  children,
  onAction,
  ...submitFieldProps
}) => {
  const forms = useForms((state) => state.forms);
  const formMethods = forms[formId];
  const dynamicAction = convertFunction(
    onAction,
    'formMethods',
    'forms',
    'formId',
    'values'
  );
  const onSubmit = (values: FieldValues) => {
    dynamicAction(formMethods, forms, formId, values);
  };

  return (
    <Button {...submitFieldProps} onClick={formMethods.handleSubmit(onSubmit)}>
      {children}
    </Button>
  );
};

export default ActionSubmit;
