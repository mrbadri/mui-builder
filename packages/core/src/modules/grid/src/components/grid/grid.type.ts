import { Grid2Props } from '@mui/material';

import { DynamicChildrenProps } from '@mui-builder/core';

export type GridProps = Omit<Grid2Props, 'children'> & DynamicChildrenProps;
