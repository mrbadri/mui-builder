import { Configs } from '@mui-builder/form';

import { FieldProps, FormTypes } from '../../types/public.types';

export type FormBuilderProps = {
  fieldType: FormTypes;
  fieldProps: FieldProps;
  configs?: Configs;
};
