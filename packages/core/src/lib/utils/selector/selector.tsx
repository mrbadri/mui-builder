import { FIELD_TYPE } from 'packages/components/form/src/types/selector.types';
import React, { Suspense, lazy } from 'react';
import { GROUP_TYPE } from '../../components/builder/builder';

// Assuming these are the default exports from the respective modules.

export interface SelectorProps {
  groupType: GROUP_TYPE;
  fieldType: FIELD_TYPE;
  fieldProps: object;
}

const Selector: React.FC<SelectorProps> = ({ groupType, fieldType, fieldProps }) => {
  let SelectedComponent;

  switch (groupType) {
    case 'form':
      SelectedComponent = lazy(() => import('@mui-builder/form'));
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <SelectedComponent field={fieldType} fieldProps={fieldProps} />
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
