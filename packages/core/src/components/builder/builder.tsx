import React from 'react';

import { BuilderProps } from './builder.types';

import Selector from '../../utils/selector/selector';

export const Builder: React.FC<BuilderProps> = ({ groupList }) => {
  return groupList.map((data, index) => (
    <Selector
      key={`${data.id}-index-${index}`}
      groupType={data.groupType}
      type={data.type}
      props={data.props}
    />
  ));
};
