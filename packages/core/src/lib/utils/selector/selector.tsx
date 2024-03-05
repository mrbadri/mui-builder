import React, { Suspense, lazy } from 'react';
import { GROUP_TYPE } from '../../components/builder/builder';
import {
  FIELD_TYPE,
  FieldProps,
} from 'packages/components/form/src/types/public.types';


export interface SelectorProps {
  groupType: GROUP_TYPE;
  fieldType: FIELD_TYPE;
  fieldProps: FieldProps;
}

const Selector: React.FC<SelectorProps> = ({
  groupType,
  fieldType,
  fieldProps,
}) => {
  let SelectedComponent;

  switch (groupType) {
    case 'form':
      SelectedComponent = lazy(() => import('@mui-builder/form'));
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <SelectedComponent fieldType={fieldType} fieldProps={fieldProps} />
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
};

export default Selector;
