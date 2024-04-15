import { FieldProps, FormTypes } from '@mui-builder/form';

import { GridTypes } from '../../types/public.types';
import { GROUP_TYPE } from '../../utils/coreSelector/selector.types';

import { GridProps } from '../grid/grid.type';

export type FormBuilderProps = {
  id: string;
  groupType: GROUP_TYPE;
  type: FormTypes | GridTypes;
  props: FieldProps | GridProps;
};

export type BuilderProps = {
  groupList: FormBuilderProps[];
};
