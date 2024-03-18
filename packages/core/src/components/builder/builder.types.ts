import { FieldProps, FormTypes } from '@mui-builder/form';

export type GROUP_TYPE = 'form';

export type FormBuilderProps = {
  id: string;
  groupType: GROUP_TYPE;
  type: FormTypes;
  props: FieldProps;
};

export type BuilderProps = {
  groupList: FormBuilderProps[];
};
