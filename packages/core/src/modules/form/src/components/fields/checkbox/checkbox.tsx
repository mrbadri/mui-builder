import { FC } from 'react';

import { FormControlLabel, Checkbox as MuiCheckbox } from '@mui/material';

import { CheckboxProps } from './checkbox.types';

import useCheckbox from './useCheckbox';

const Checkbox: FC<CheckboxProps> = (props) => {
  const { getCheckboxProps, getFormControlLabelProps } = useCheckbox(props);

  return (
    <FormControlLabel
      {...getFormControlLabelProps()}
      control={<MuiCheckbox {...getCheckboxProps()} />}
    />
  );
};

export default Checkbox;
