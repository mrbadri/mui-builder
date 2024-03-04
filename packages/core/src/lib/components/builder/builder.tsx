import React from 'react';
import Selector from '../../utils/selector/selector';
import { FIELD_TYPE } from 'packages/components/form/src/types/selector.types';

export enum GROUP_TYPE {
  FORM = 'form',
}

export interface BuilderProps {
  groupList: {
    id: string | number;
    groupType: GROUP_TYPE;
    fieldType: FIELD_TYPE;
    fieldProps: object;
  }[];
}

export const Builder: React.FC<BuilderProps> = ({ groupList }) => {
  return (
    <>
      {groupList.map((data, index) => (
        <Selector
          key={`${data.id}-index-${index}`}
          groupType={data.groupType}
          fieldType={data.fieldType}
          fieldProps={data.fieldProps}
        />
      ))}
    </>
  );
};
