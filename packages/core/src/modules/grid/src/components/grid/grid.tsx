import { Unstable_Grid2 as Grid2 } from '@mui/material';

import DynamicChildren from '@mui-builder/core';

import { GridProps } from './grid.type';

const Grid = (props: GridProps) => {
  const { children, ...restProps } = props;

  return (
    <Grid2 {...restProps}>
      <DynamicChildren>{children}</DynamicChildren>
    </Grid2>
  );
};

export default Grid;
