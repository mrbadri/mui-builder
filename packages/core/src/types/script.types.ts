import { Form, SetProps } from '@mui-builder/form';

export type Script = string;

export type ScriptFn = (
  formMethod: Form,
  forms: Record<string, Form>,
  formId: string,
  setProps?: SetProps
) => any;
