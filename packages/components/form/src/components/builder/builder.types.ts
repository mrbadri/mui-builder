import { FieldProps, FormTypes } from '../../types/public.types';

import { Configs } from '../../types/configs.type';

export interface BuilderProps {
  type: FormTypes;
  props: FieldProps;
  fieldId: string;
  configs?: Configs;
}
