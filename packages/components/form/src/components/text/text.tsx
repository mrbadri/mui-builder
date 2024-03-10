import { TextField } from '@mui/material';
import { FC } from 'react';
import { useController } from 'react-hook-form';
import { TextProps } from './text.types';
import useForms from '../../hooks/useForms/useForms';

const Text: FC<TextProps> = ({ formId, ...textFieldProps }) => {
  const { forms } = useForms();
  const formMethod = forms?.[formId];
  const { field } = useController({
    name: textFieldProps.id,
    control: formMethod.control,
    rules: { required: true },
  });
  
  return <TextField {...field} {...textFieldProps} value={field.value ?? ''} />;
};

export default Text;
