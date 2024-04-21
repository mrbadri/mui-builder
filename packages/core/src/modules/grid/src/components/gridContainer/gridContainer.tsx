// eslint-disable-next-line @nx/enforce-module-boundaries
import { GridContainerProps } from './gridContainer.types';

import Grid from '../grid/grid';

const GridContainer = (props: GridContainerProps) => {
  return <Grid container {...props} />;
};

export default GridContainer;
