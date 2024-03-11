import React from 'react';
import Selector from '../../utils/selector/selector';
import {
  FormTypes,
  FieldProps,
} from 'packages/components/form/src/types/public.types';

export type GROUP_TYPE = 'form';

export type FormBuilderProps = {
  id: string;
  groupType: GROUP_TYPE;
  type: FormTypes;
  props: FieldProps;
}

export type BuilderProps = {
  groupList: FormBuilderProps[];
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
