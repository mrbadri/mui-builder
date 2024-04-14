// eslint-disable-next-line @nx/enforce-module-boundaries
import { ContainerProps } from './container.types';

import Grid from '../grid/grid';

const Container = (props: ContainerProps) => {
  return <Grid container {...props} />;
};

export default Container;
