import { Grid2Props } from '@mui/material';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { FormBuilderProps } from '@mui-builder/core';

export type GridProps = Omit<Grid2Props, 'children'> & {
  children?: FormBuilderProps;
};
