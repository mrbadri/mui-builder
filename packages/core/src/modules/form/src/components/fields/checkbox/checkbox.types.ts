import {
  FormControlLabelProps,
  CheckboxProps as MuiCheckboxProps,
} from '@mui/material';

import { Api } from '@mui-builder/types/api.types';
import { Script } from '@mui-builder/types/script.types';

import { Dependesies, FormId, Id } from '../../../types/public.types';

export type CheckboxProps = {
  checkboxProps: MuiCheckboxProps;
  formControlLabelProps: Omit<FormControlLabelProps, 'control'>;
} & {
  id: Id;
  formId: FormId;
  script?: Script;
  dependesies?: Dependesies;
  propsController?: Record<string, any>;
  api?: Api;
  // rule?: Rule;
  show?: boolean;
};
