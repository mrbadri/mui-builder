import { FC } from 'react';

import { FormControlLabel, Radio as MuiRadio } from '@mui/material';

import { RadioProps } from './radio.types';

import useRadio from './useRadio';

const Radio: FC<RadioProps> = (props) => {
  const { getFormControlLabelProps, getRadioInputProps } = useRadio(props);

  return (
    <FormControlLabel
      {...getFormControlLabelProps()}
      control={<MuiRadio {...getRadioInputProps()} />}
    />
  );
};

export default Radio;
