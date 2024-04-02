import { TextFieldProps } from '@mui/material';
import {
  Api,
  Dependesies,
  FormId,
  Id,
  Script,
} from '../../../types/public.types';

export type TextProps = TextFieldProps & {
  id: Id;
  formId: FormId;
  script?: Script;
  dependesies?: Dependesies;
  propsController?: Record<string, any>;
  api?: Api;
};
