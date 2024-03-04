import React from 'react';
import Selector from '../../utils/selector/selector';
import { FIELD_TYPE } from '../../../types/selector.types';
import { TextFieldProps } from '@mui/material';

export interface BuilderProps {
  field: FIELD_TYPE;
  fieldProps: TextFieldProps;
}

export function Builder({ field }: BuilderProps) {
  return (
    <Selector
      fieldType={field}
      fieldProps={{ variant: 'outlined', label: 'label', id: '2' }}
    />
  );
}
