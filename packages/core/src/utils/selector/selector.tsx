import { FC, Fragment, Suspense, lazy } from 'react';

import { SelectorProps } from './selector.types';

const Selector: FC<SelectorProps> = ({
  groupType,
  fieldType,
  fieldProps,
  fieldId,
  configs,
}) => {
  let SelectedComponent;

  switch (groupType) {
    case 'form':
      SelectedComponent = lazy(() => import('@mui-builder/form'));

      return (
        <Suspense>
          <SelectedComponent
            fieldType={fieldType}
            fieldProps={fieldProps}
            fieldId={fieldId}
            configs={configs}
          />
        </Suspense>
      );

    default:
      SelectedComponent = Fragment;
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <SelectedComponent />
        </Suspense>
      );
  }
};

export default Selector;
