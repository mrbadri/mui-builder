import { Configs, FieldProps, FormTypes } from '@mui-builder/form';
import { GridProps, GridTypes } from '@mui-builder/grid';

export type GROUP_TYPE = 'form' | 'grid';

export type BuilderProps = {
  id?: string;
  groupType: GROUP_TYPE;
  type: FormTypes | GridTypes;
  props: FieldProps | GridProps;
  configs?: Configs;
};
