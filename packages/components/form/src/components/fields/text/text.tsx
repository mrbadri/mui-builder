import { FC } from 'react';

import { TextField } from '@mui/material';

import { TextProps } from './text.types';

import UseText from './useText';

const Text: FC<TextProps> = (props) => {
  const { getFieldProps, show } = UseText(props);

  if (show) return <TextField {...getFieldProps()} />;

  return <></>;
};

export default Text;
