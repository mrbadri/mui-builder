import { SetProps } from '../../hooks/usePropsController/usePropsController';
import { FormTypes, FieldProps } from '../../types/public.types';

export interface SelectorProps {
  fieldType: FormTypes;
  fieldProps: FieldProps;
  propsController: Record<string, any>;
  setProps: SetProps;
}
