import {
  FormControlLabelProps,
  CheckboxProps as MuiCheckboxProps,
} from '@mui/material';

import { Api } from '@mui-builder/types/api.types';
import { Script } from '@mui-builder/types/script.types';

import { Dependencies, FormId, Id } from '../../../types/public.types';
import { Rule } from '../../../types/validation.types';

export type CheckboxProps = Omit<FormControlLabelProps, 'control'> & {
  id: Id;
  checkboxProps: MuiCheckboxProps;
  formId: FormId;
  script?: Script;
  dependencies?: Dependencies;
  propsController?: Record<string, any>;
  api?: Api;
  rule?: Rule;
  show?: boolean;
};
