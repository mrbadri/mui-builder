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
  const { getFormControlProps, getInputLableProps, options, getSelectProps } =
    useSelect(props);

  return (
    <FormControl {...getFormControlProps()}>
      <InputLabel {...getInputLableProps()}></InputLabel>
      <MuiSelect {...getSelectProps()}>
        {options.map((item) => (
          <MenuItem key={`select-${item.id}`} {...item}>
            {item.title}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
};

export default Select;
