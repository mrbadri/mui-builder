import { TextFieldProps } from '@mui/material';

import {
  Dependesies,
  FormId,
  Id,
} from '../../../types/public.types';
import { Script } from '../../../types/script.types';
import { Rule } from '../../../types/validation.types';
import { Api } from '../../../types/api.types';

export type TextProps = TextFieldProps & {
  id: Id;
  formId: FormId;
  script?: Script;
  dependesies?: Dependesies;
  propsController?: Record<string, any>;
  api?: Api;
  rule?: Rule;
  show?: boolean;
};
