import { FieldProps, FormTypes } from '../../types/public.types';

import { Configs } from '../../types/configs.type';

export type BuilderProps = {
  fieldType: FormTypes;
  fieldProps: FieldProps;
  configs?: Configs;
};
