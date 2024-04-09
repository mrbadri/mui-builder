import { FieldProps, FormTypes } from '../../types/public.types';

import { Configs } from '../../types/configs.type';

export interface BuilderProps {
  fieldType: FormTypes;
  fieldProps: FieldProps;
  fieldId: string;
  configs?: Configs;
}
