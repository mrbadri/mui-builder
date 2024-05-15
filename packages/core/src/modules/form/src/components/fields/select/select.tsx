import { FC } from 'react';

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from '@mui/material';

import { SelectProps } from './select.types';

import useSelect from './useSelect';

const Select: FC<SelectProps> = (props) => {
  const {
    getFormControlProps,
    getInputLableProps,
    menuItemsList,
    getSelectProps,
  } = useSelect(props);

  return (
    <FormControl {...getFormControlProps()}>
      <InputLabel {...getInputLableProps()}></InputLabel>
      <MuiSelect {...getSelectProps()}>
        {menuItemsList.map((item) => (
          <MenuItem key={item.id} {...item}></MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
};

export default Select;
