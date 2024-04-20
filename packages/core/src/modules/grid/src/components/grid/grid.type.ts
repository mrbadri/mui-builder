import { DynamicChildrenProps } from 'packages/core/src/modules/builder/src/components/dynamicChildren/dynamicChildren.types';

import { Grid2Props } from '@mui/material';

export type GridProps = Omit<Grid2Props, 'children'> & DynamicChildrenProps;
