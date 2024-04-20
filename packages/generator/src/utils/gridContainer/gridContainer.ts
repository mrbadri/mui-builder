import { GridProps } from '@mui-builder/grid';

import { Generator } from '../../types/public.types';

import generateID from '../id/id';

const generateGridContainer: Generator<GridProps> = ({ children, props }) => {
  return {
    id: generateID(),
    groupType: 'grid',
    type: 'container',
    props: {
      rowSpacing: 2,
      columnSpacing: 2,
      children,
      ...props,
    },
  };
};

export default generateGridContainer;
