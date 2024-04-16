import { Configs, FieldProps, FormTypes } from '@mui-builder/form';
import { GridProps, GridTypes } from '@mui-builder/grid';

export type GROUP_TYPE = 'form' | 'grid';

export type FormBuilderProps = {
  id: string;
  groupType: GROUP_TYPE;
  type: FormTypes | GridTypes;
  props: FieldProps | GridProps;
  configs?: Configs;
};

export type BuilderProps = {
  groupList: FormBuilderProps[];
};
