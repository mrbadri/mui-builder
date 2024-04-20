import { Grid2Props } from '@mui/material';

import { FormBuilderProps } from '../coreBuilder/builder.types';

export type GridProps = Omit<Grid2Props, 'children'> & {
  children?: FormBuilderProps | FormBuilderProps[];
};
