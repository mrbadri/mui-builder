import { GridItemProps } from './gridItem.types';

import Grid from '../grid/grid';

const GridItem = (props: GridItemProps) => {
  return <Grid {...props} />;
};

export default GridItem;
