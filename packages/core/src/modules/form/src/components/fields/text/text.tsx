import { FC } from 'react';

import { TextField } from '@mui/material';

import { TextProps } from './text.types';

import useText from './useText';

const Text: FC<TextProps> = (props) => {
  const { getFieldProps, show } = useText(props);

  if (show) return <TextField {...getFieldProps()} />;

  return null;
};

export default Text;
