import { TextFieldProps } from '@mui/material';
import { FormId, Id, Script } from '../../../types/public.types';
import { SetProps } from '../../../hooks/usePropsController/usePropsController';

export type TextProps = TextFieldProps & {
  id: Id;
  formId: FormId;
  script?: Script;
  propsController?: Record<string, any>;
  setProps: SetProps;
};
