/* eslint-disable @nx/enforce-module-boundaries */
import { FC, Fragment, Suspense, lazy } from 'react';

import { FieldProps, FormTypes } from '@mui-builder/form';
import { GridProps, GridTypes } from '@mui-builder/grid';

import { SelectorProps } from './selector.types';

const Selector: FC<SelectorProps> = ({ groupType, type, props, configs }) => {
  let SelectedComponent;

  switch (groupType) {
    case 'form':
      SelectedComponent = lazy(() => import('@mui-builder/form'));

      return (
        <Suspense>
          <SelectedComponent
            fieldType={type as FormTypes}
            fieldProps={props as FieldProps}
            configs={configs}
          />
        </Suspense>
      );

    case 'grid':
      SelectedComponent = lazy(() => import('@mui-builder/grid'));

      return (
        <Suspense>
          <SelectedComponent
            gridType={type as GridTypes}
            gridProps={props as GridProps}
          />
        </Suspense>
      );

    default:
      SelectedComponent = Fragment;
      return <SelectedComponent />;
  }
};

export default Selector;
