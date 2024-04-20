import { FC, Fragment, Suspense, lazy } from 'react';

import type { ContainerProps } from '../../components/container/container.types';
import type { ItemProps } from '../../components/item/item.types';
import { SelectorProps } from './selector.types';

const Selector: FC<SelectorProps> = ({ gridType, gridProps }) => {
  let SelectedComponent;

  switch (gridType) {
    case 'container':
      SelectedComponent = lazy(
        () => import('../../components/container/container')
      );

      return (
        <Suspense fallback={<div>Loading...</div>}>
          <SelectedComponent {...(gridProps as ContainerProps)} />
        </Suspense>
      );

    case 'item':
      SelectedComponent = lazy(() => import('../../components/item/item'));

      return (
        <Suspense fallback={<div>Loading...</div>}>
          <SelectedComponent {...(gridProps as ItemProps)} />
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
