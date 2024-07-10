import { DynamicChildrenProps } from './dynamicChildren.types';

import Selector from '../selector/selector';

const DynamicChildren = ({ childs }: DynamicChildrenProps) => {
  const childsList = Array.isArray(childs) ? childs : [childs];

  return childsList.map((data) => <Selector key={data.id} {...data} />);
};

export default DynamicChildren;
