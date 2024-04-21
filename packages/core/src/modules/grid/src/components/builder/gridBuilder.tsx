import { FC } from 'react';

import { GridBuilderProps } from './gridBuilder.types';

import GridSelector from '../../utils/selector/gridSelector';
import useGridBuilder from './useGridBuilder';

const GridBuilder: FC<GridBuilderProps> = (props) => {
  const { getSelectorProps } = useGridBuilder(props);

  return <GridSelector {...getSelectorProps()} />;
};

export default GridBuilder;
