import { DynamicChildrenProps } from './dynamicChildren.types';

import Selector from '../selector/selector';

const DynamicChildren = ({ children }: DynamicChildrenProps) => {
  const childrenList = Array.isArray(children) ? children : [children];

  return childrenList.map((data) => <Selector key={data.id} {...data} />);
};

export default DynamicChildren;
