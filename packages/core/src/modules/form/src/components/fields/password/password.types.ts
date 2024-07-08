import { TextFieldProps } from '@mui/material';

import { Api } from '@mui-builder/types/api.types';
import { Script } from '@mui-builder/types/script.types';

import { Dependesies, FormId, Id } from '../../../types/public.types';
import { Rule } from '../../../types/validation.types';

export type PasswordProps = TextFieldProps & {
  id: Id;
  formId: FormId;
  script?: Script;
  dependesies?: Dependesies;
  propsController?: Record<string, any>;
  api?: Api;
  rule?: Rule;
  show?: boolean;
};
