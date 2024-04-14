import { ContainerProps } from './container.types';

import Grid from '../grid/grid';

const Container = (props: ContainerProps) => {
  return <Grid {...props} />;
};

export default Container;
