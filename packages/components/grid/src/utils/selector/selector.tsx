import { FC, Fragment, Suspense, lazy } from 'react';

import { ContainerProps } from '../../components/Container/container.types';
import { ItemProps } from '../../components/item/item.types';
import { SelectorProps } from './selector.types';

const Selector: FC<SelectorProps> = ({ gridType, gridProps }) => {
  let SelectedComponent;

  switch (gridType) {
    case 'container':
      SelectedComponent = lazy(
        () => import('../../components/Container/container')
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
