import { GridProps } from '@mui-builder/grid';

import { Generator } from '../../types/public.types';

import generateID from '../id/id';

const generateGridItem: Generator<GridProps> = ({ children, props }) => {
  return {
    id: generateID(),
    groupType: 'grid',
    type: 'item',
    props: {
      rowSpacing: 2,
      columnSpacing: 2,
      children,
      ...props,
    },
  };
};

export default generateGridItem;
