import DynamicChildren from 'packages/core/src/modules/builder/src';

import { Unstable_Grid2 as Grid2 } from '@mui/material';

import { GridProps } from './grid.type';

const Grid = (props: GridProps) => {
  const { children, ...restProps } = props;

  return (
    <Grid2 {...restProps}>
      <DynamicChildren children={children} />
    </Grid2>
  );
};

export default Grid;
