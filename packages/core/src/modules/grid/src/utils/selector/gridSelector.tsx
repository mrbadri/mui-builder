import { FC, Fragment } from 'react';

import type { GridContainerProps } from '../../components/gridContainer/gridContainer.types';
import type { GridItemProps } from '../../components/gridItem/gridItem.types';
import { GridSelectorProps } from './gridSelector.types';

import GridContainer from '../../components/gridContainer/gridContainer';
import GridItem from '../../components/gridItem/gridItem';

const GridSelector: FC<GridSelectorProps> = ({ gridType, gridProps }) => {
  let SelectedComponent;

  switch (gridType) {
    case 'container':
      SelectedComponent = GridContainer;

      return <SelectedComponent {...(gridProps as GridContainerProps)} />;

    case 'item':
      SelectedComponent = GridItem;

      return <SelectedComponent {...(gridProps as GridItemProps)} />;

    default:
      SelectedComponent = Fragment;

      return <SelectedComponent />;
  }
};
export default GridSelector;
