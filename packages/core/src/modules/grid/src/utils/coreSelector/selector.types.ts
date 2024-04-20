import { Configs, FieldProps, FormTypes } from '@mui-builder/form';

import { GridTypes } from '../../types/public.types';

import { GridProps } from '../../components/grid/grid.type';

export type GROUP_TYPE = 'form' | 'grid';

export interface SelectorProps {
  groupType: GROUP_TYPE;
  type: FormTypes | GridTypes;
  props: FieldProps | GridProps;
  fieldId: string;
  configs?: Configs;
}
