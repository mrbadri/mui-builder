import React from 'react';
import Selector from '../../utils/selector/selector';
import { BuilderProps } from './builder.types';


export const Builder: React.FC<BuilderProps> = ({ groupList }) => {

  return (
    <>
      {groupList.map((data, index) => (
        <Selector
          key={`${data.id}-index-${index}`}
          groupType={data.groupType}
          fieldType={data.type}
          fieldProps={data.props}
        />
      ))}
    </>
  );
};
