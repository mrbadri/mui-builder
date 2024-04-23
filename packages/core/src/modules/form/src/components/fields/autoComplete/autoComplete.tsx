import React, { FC } from 'react';

import { Autocomplete, TextField } from '@mui/material';

import { AutoCompleteProps } from './autoComplete.types';

import useAutoComplete from './useAutoComplete';

const AutoComplete: FC<AutoCompleteProps<unknown>> = (props) => {
  const { getFieldProps, show, innerTextFieldProps } = useAutoComplete(props);

  return (
    <Autocomplete
      {...getFieldProps()}
      renderInput={(params) => (
        <TextField {...params} {...innerTextFieldProps} />
      )}
    />
  );
};

export default AutoComplete;
