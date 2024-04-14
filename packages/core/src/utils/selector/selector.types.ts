import { FieldProps, FormTypes } from '@mui-builder/form';
import { GridProps, GridTypes } from '@mui-builder/grid';

import { GROUP_TYPE } from '../../components/builder/builder.types';

export interface SelectorProps {
  groupType: GROUP_TYPE;
  type: FormTypes | GridTypes;
  props: FieldProps | GridProps;
}
