import {
  FormControlLabelProps,
  CheckboxProps as MuiCheckboxProps,
} from '@mui/material';

import { Api } from '@mui-builder/types/api.types';
import { Script } from '@mui-builder/types/script.types';

import { Dependesies, FormId, Id } from '../../../types/public.types';
import { Rule } from '../../../types/validation.types';

export type CheckboxProps = Omit<FormControlLabelProps, 'control'> & {
  id: Id;
  checkboxProps: MuiCheckboxProps;
  formId: FormId;
  script?: Script;
  dependencies?: Dependesies;
  propsController?: Record<string, any>;
  api?: Api;
  rule?: Rule;
  show?: boolean;
};
