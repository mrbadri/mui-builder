import { Unstable_Grid2 as Grid2 } from '@mui/material';

import { GridProps } from './grid.type';

const Grid = (props: GridProps) => {
  return <Grid2 {...props} />;
};

export default Grid;
