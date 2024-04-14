import { Unstable_Grid2 as Grid2 } from '@mui/material';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { Builder, FormBuilderProps } from '@mui-builder/core';

import { GridProps } from './grid.type';

const Grid = (props: GridProps) => {
  const { children, ...restProps } = props;

  return (
    <Grid2 {...restProps}>
      <Builder groupList={[children as FormBuilderProps]} />
    </Grid2>
  );
};

export default Grid;
