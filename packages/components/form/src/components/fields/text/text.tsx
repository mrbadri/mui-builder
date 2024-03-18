import { FC } from 'react';
import { TextField } from '@mui/material';
import { TextProps } from './text.types';
import UseText from './useText';

const Text: FC<TextProps> = (props) => {
  const { getFieldProps } = UseText(props);

  return <TextField {...getFieldProps()} />;
};

export default Text;
