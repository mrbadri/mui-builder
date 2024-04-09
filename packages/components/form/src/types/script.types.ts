import { Form } from '../hooks/useForms/useForms.types';
import { SetProps } from '../hooks/usePropsController/usePropsController.types';

export type Script = string;

export type ScriptFn = (
  formMethod: Form,
  forms: Record<string, Form>,
  formId: string,
  setProps?: SetProps
) => any;
