import { Button } from '@mui/material';
import { FC } from 'react';
import { ActionSubmitFieldProps } from './submit.types';
import useForms from '../../../hooks/useForms/useForms';
import { FieldValues } from 'react-hook-form';
import convertFunction from '../../../../../../utils/convertFunction/convertFunction';

const ActionSubmit: FC<ActionSubmitFieldProps> = ({
  formId,
  children,
  ...submitFieldProps
}) => {
  const forms = useForms((state) => state.forms);
  const { handleSubmit } = forms[formId];
  const onSubmit = (values: FieldValues) => {
    console.log(values);
    // convertFunction(submitFieldProps.onAction, );
  };

  return (
    <Button {...submitFieldProps} onClick={handleSubmit(onSubmit)}>
      {children}
    </Button>
  );
};

export default ActionSubmit;
