import React, { Suspense, lazy } from 'react';

// Assuming these are the default exports from the respective modules.

export interface SelectorProps {
  groupType: string;
}

const Selector: React.FC<SelectorProps> = ({ groupType }) => {
  let SelectedComponent;

  switch (groupType) {
    case 'form':
      SelectedComponent = lazy(() => import('@mui-builder/form'));
      break;

    default:
      SelectedComponent = React.Fragment;
      break;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SelectedComponent />
    </Suspense>
  );
};

export default Selector;
