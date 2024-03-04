import { FIELD_TYPE } from 'packages/components/form/src/types/selector.types';
import React, { Suspense, lazy } from 'react';

// Assuming these are the default exports from the respective modules.

export interface SelectorProps {
  groupType: string;
  fieldType: FIELD_TYPE;
}

const Selector: React.FC<SelectorProps> = ({ groupType, fieldType }) => {
  let SelectedComponent;

  switch (groupType) {
    case 'form':
      SelectedComponent = lazy(() => import('@mui-builder/form'));
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <SelectedComponent field={fieldType} fieldProps={{ variant: 'outlined', label: 'label', id: '2' }} />
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
