import { FC } from 'react';

import { TextField } from '@mui/material';

import { NumberFieldProps } from './number.types';

import useNumberField from './useNumber';

const NumberField: FC<NumberFieldProps> = (props) => {
  const { getFieldProps, show } = useNumberField(props);

  if (show) return <TextField {...getFieldProps()} />;

  return null;
};

export default NumberField;
