import { FC, Fragment, Suspense, lazy } from 'react';

import { FieldProps, FormTypes } from '@mui-builder/form';

import { GridTypes } from '../../types/public.types';
import { SelectorProps } from './selector.types';

import { GridProps } from '../../components/grid/grid.type';

const CoreSelector: FC<SelectorProps> = ({ groupType, type, props }) => {
  let SelectedComponent;

  switch (groupType) {
    case 'form':
      SelectedComponent = lazy(() => import('@mui-builder/form'));

      return (
        <Suspense fallback={<div>Loading...</div>}>
          <SelectedComponent
            fieldType={type as FormTypes}
            fieldProps={props as FieldProps}
          />
        </Suspense>
      );

    case 'grid':
      SelectedComponent = lazy(
        () => import('../../components/builder/builder')
      );

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

export default CoreSelector;
