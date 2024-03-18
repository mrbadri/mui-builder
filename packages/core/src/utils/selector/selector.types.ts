import { GROUP_TYPE } from '../../components/builder/builder.types';
import { FieldProps, FormTypes } from '@mui-builder/form';

export interface SelectorProps {
  groupType: GROUP_TYPE;
  fieldType: FormTypes;
  fieldProps: FieldProps;
}
