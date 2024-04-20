/* eslint-disable @nx/enforce-module-boundaries */
import { GROUP_TYPE } from 'packages/core/src/types/builder.type';

import { Configs, FieldProps, FormTypes } from '@mui-builder/form';
import { GridProps, GridTypes } from '@mui-builder/grid';

export interface SelectorProps {
  groupType: GROUP_TYPE;
  type: FormTypes | GridTypes;
  props: FieldProps | GridProps;
  fieldId: string;
  configs?: Configs;
}
