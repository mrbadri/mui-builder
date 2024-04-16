import { FieldProps, FormTypes } from '../../types/public.types';

import { Configs } from '../../types/configs.type';

export interface SelectorProps {
  type: FormTypes;
  props: FieldProps;
  fieldId: string;
  configs?: Configs;
}
