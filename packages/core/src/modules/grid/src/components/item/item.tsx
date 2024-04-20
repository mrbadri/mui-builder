import { ItemProps } from './item.types';

import Grid from '../grid/grid';

const Item = (props: ItemProps) => {
  return <Grid {...props} />;
};

export default Item;
