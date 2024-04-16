import { FC, Fragment, Suspense, lazy } from 'react';

import { FieldProps, FormTypes } from '@mui-builder/form';
import { GridProps, GridTypes } from '@mui-builder/grid';

import { SelectorProps } from './selector.types';

const Selector: FC<SelectorProps> = ({
  groupType,
  type,
  props,
  fieldId,
  configs,
}) => {
  let SelectedComponent;

  switch (groupType) {
    case 'form':
      SelectedComponent = lazy(() => import('@mui-builder/form'));

      return (
        <Suspense fallback={<div>Loading...</div>}>
          <SelectedComponent
            fieldType={type as FormTypes}
            fieldProps={props as FieldProps}
            fieldId={fieldId}
            configs={configs}
          />
        </Suspense>
      );

    case 'grid':
      SelectedComponent = lazy(() => import('@mui-builder/grid'));

      return (
        <Suspense fallback={<div>Loading...</div>}>
          <SelectedComponent
            gridType={type as GridTypes}
            gridProps={props as GridProps}
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
