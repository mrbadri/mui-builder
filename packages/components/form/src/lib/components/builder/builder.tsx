import React from 'react';
import Selector from '../../utils/selector/selector';
import { FIELD_TYPE } from '../../../types/selector.types';

export interface BuilderProps {
  field: FIELD_TYPE;
  fieldProps: object;
}

export function Builder({ field,fieldProps }: BuilderProps) {
  return (
    <Selector
      fieldType={field}
      fieldProps={fieldProps}
    />
  );
}
