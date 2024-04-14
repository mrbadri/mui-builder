import { FieldProps, FormTypes } from '@mui-builder/form';

export type GROUP_TYPE = 'form' | 'grid';

export type FormBuilderProps = {
  id: string;
  groupType: GROUP_TYPE;
  type: FormTypes;
  props: FieldProps;
};

export type BuilderProps = {
  groupList: FormBuilderProps[];
};
