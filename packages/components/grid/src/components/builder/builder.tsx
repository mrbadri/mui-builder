import { FC } from 'react';

import { BuilderProps } from './builder.types';

import Selector from '../../utils/selector/selector';
import useBuilder from './useBuilder';

const Builder: FC<BuilderProps> = (props) => {
  const { getSelectorProps } = useBuilder(props);

  return <Selector {...getSelectorProps()} />;
};

export default Builder;
