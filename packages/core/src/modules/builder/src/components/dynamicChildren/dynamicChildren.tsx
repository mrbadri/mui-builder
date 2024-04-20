import { DynamicChildrenProps } from './dynamicChildren.types';

import Selector from '../selector/selector';

const DynamicChildren = ({ children }: DynamicChildrenProps) => {
  return children.map((data, index) => (
    <Selector
      key={`${data.id}-index-${index}`}
      groupType={data.groupType}
      type={data.type}
      props={data.props}
      fieldId={data.id}
      configs={data.configs}
    />
  ));
};

export default DynamicChildren;
