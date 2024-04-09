import { TextFieldProps } from '@mui/material';

import { Api } from '../../../types/api.types';
import { Dependesies, FormId, Id } from '../../../types/public.types';
import { Script } from '../../../types/script.types';
import { Rule } from '../../../types/validation.types';

export type TextProps = TextFieldProps & {
  id: Id;
  formId: FormId;
  script?: Script;
  dependesies?: Dependesies;
  propsController?: Record<string, any>;
  api?: Api;
  rule?: Rule;
  show?: boolean;
  loadingProps?: LoadingProps;
};
