import { FC, Fragment } from 'react';

import type { ContainerProps } from '../../components/container/container.types';
import type { ItemProps } from '../../components/item/item.types';
import { SelectorProps } from './selector.types';

import Container from '../../components/container/container';
import Item from '../../components/item/item';

const Selector: FC<SelectorProps> = ({ gridType, gridProps }) => {
  let SelectedComponent;

  switch (gridType) {
    case 'container':
      SelectedComponent = Container;

      return <SelectedComponent {...(gridProps as ContainerProps)} />;

    case 'item':
      SelectedComponent = Item;

      return <SelectedComponent {...(gridProps as ItemProps)} />;

    default:
      SelectedComponent = Fragment;

      return <SelectedComponent />;
  }
};
export default Selector;
