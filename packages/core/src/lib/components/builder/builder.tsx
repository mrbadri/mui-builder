import React from 'react';
import Selector from '../../utils/selector/selector';
import {
  FormTypes,
  FieldProps,
} from 'packages/components/form/src/types/public.types';

export type GROUP_TYPE = 'form';

export enum SECTION_TYPE {
  CARD = 'card',
}

export interface IFormTextBuilderProps {
  id: string;
  groupType: GROUP_TYPE;
  type: FormTypes;
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
