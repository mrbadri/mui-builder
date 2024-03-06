import { TextField } from '@mui/material';
import { FC } from 'react';
import { useController } from 'react-hook-form';
import { TextProps } from './text.types';
import useForms from '../../hooks/useForms/useForms';

const Text: FC<TextProps> = ({ formId, ...textFieldProps }) => {
  const { forms } = useForms();
  const formMethod = forms?.[formId];
  const { field } = useController({
    name: formId,
    control: formMethod.control,
    rules: { required: true },
  });

  return (
    <TextField
      onChange={field.onChange}
      onBlur={field.onBlur}
      value={field.value ?? ''}
      name={field.name}
      inputRef={field.ref}
    />
  );
};

export default Text;
