import React, { FC } from 'react';

import { Autocomplete, TextField } from '@mui/material';

import ShowIf from '@mui-builder/utils/showIf/showIf';

import { AutoCompleteProps } from './autoComplete.types';

import useAutoComplete from './useAutoComplete';

const AutoComplete: FC<AutoCompleteProps<unknown>> = (props) => {
  const { show, getFieldProps, getInnerTextFieldProps } =
    useAutoComplete(props);

  return (
    <ShowIf show={show}>
      <Autocomplete
        {...getFieldProps()}
        renderInput={(params) => (
          <TextField {...params} {...getInnerTextFieldProps()} />
        )}
      />
    </ShowIf>
  );
};

export default AutoComplete;
