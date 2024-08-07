import { FC } from 'react';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material';

import { PasswordProps } from './password.types';

import usePassword from './usePassword';

const Password: FC<PasswordProps> = (props) => {
  const {
    getFieldProps,
    show,
    getInputAdornmentProps,
    getIconButtonProps,
    showPassword,
  } = usePassword(props);

  if (show)
    return (
      <TextField
        {...getFieldProps()}
        InputProps={{
          endAdornment: (
            <InputAdornment {...getInputAdornmentProps()}>
              <IconButton {...getIconButtonProps()}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    );

  return null;
};

export default Password;
