import React from 'react';
import Selector from '../../utils/selector/selector';
import {
  FIELD_TYPE,
  FieldProps,
} from 'packages/components/form/src/types/public.types';

export enum GROUP_TYPE {
  FORM = 'form',
  SECTION = 'section',
}

export enum SECTION_TYPE {
  CARD = 'card',
}

export interface IFormTextBuilderProps {
  id: string;
  groupType: GROUP_TYPE;
  type: FIELD_TYPE;
  props: FieldProps;
}

export interface BuilderProps {
  groupList: IFormTextBuilderProps[];
}

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
