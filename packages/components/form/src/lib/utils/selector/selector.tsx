import React, { Suspense, lazy } from 'react';
import { FIELD_TYPE } from '../../../types/selector.types';
import { TextFieldProps } from '@mui/material';

export interface SelectorProps {
  fieldType: FIELD_TYPE;
  fieldProps: object;
}
export interface ITextInputProps {
  fieldProps: TextFieldProps;
}

function Selector({ fieldType }: SelectorProps): React.ReactElement;
function Selector({
  fieldType,
  fieldProps,
}: SelectorProps & ITextInputProps): React.ReactElement {
  let SelectedComponent;

  switch (fieldType) {
    case 'text':
      SelectedComponent = lazy(() => import('../../components/text/text'));
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <SelectedComponent textFieldProps={fieldProps} />
        </Suspense>
      );

    default:
      SelectedComponent = React.Fragment;
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <SelectedComponent />
        </Suspense>
      );
  }
}

export default Selector;
