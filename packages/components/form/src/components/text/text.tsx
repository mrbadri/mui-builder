import { TextField } from '@mui/material';
import { FC } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { TextProps } from './text.types';

const Text: FC<TextProps> = ({ formId, ...textFieldProps }) => {
  const { control } = useFormContext();

  const { field } = useController({
    name: textFieldProps.id,
    control,
    rules: { required: true },
  });

  return <TextField {...field} {...textFieldProps} />;
};

export default Text;
