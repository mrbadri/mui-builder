import React from 'react';
import Selector from '../../utils/selector/selector';

export enum GROUP_TYPE {
  FORM = 'form',
}

export interface BuilderProps {
  groupList: {
    id: string | number;
    groupType: GROUP_TYPE;
  }[];
}

export const Builder: React.FC<BuilderProps> = ({ groupList }) => {
  return (
    <>
      <h1>Test Builder</h1>
      {groupList.map((data, index) => (
        <Selector
          key={`${data.id}-index-${index}`}
          groupType={data.groupType}
        />
      ))}
    </>
  );
};
