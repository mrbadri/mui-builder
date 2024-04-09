import { FieldProps, FormTypes } from '@mui-builder/form';

import { GROUP_TYPE } from '../../components/builder/builder.types';

export interface SelectorProps {
  groupType: GROUP_TYPE;
  fieldType: FormTypes;
  fieldProps: FieldProps;
  fieldId: string;
}
