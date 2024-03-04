import { TextField, TextFieldProps } from '@mui/material';
import { FC } from 'react';

export interface ITextProps {
  textFieldProps: TextFieldProps;
}

const Text: FC<ITextProps> = ({ textFieldProps }) => {
  return <TextField {...textFieldProps} />;
};

export default Text;
