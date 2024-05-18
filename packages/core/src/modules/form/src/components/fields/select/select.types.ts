import {
  FormControlProps,
  MenuItemProps,
  SelectProps as MuiSelectProps,
} from '@mui/material';
import { InputLabelProps } from '@mui/material/InputLabel';

import { Api } from '@mui-builder/types/api.types';
import { Script } from '@mui-builder/types/script.types';

import { Dependesies, FormId, Id } from '../../../types/public.types';
import { Rule } from '../../../types/validation.types';

export type SelectProps = MuiSelectProps & {
  id: Id;
  formId: FormId;
  dependesies?: Dependesies;
  api?: Api;
  rule?: Rule;
  show?: boolean;
  script?: Script;
  formControlProps: FormControlProps;
  inputLableProps: InputLabelProps;
  menuItemsList: MenuItemProps[];
  propsController?: Record<string, any>;
};
