import { Unstable_Grid2 as Grid2 } from '@mui/material';

import { FormBuilderProps } from '../coreBuilder/builder.types';

import { CoreBuilder as Builder } from '../coreBuilder/builder';
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
