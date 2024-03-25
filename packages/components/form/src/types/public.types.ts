import { SubmitFieldProps } from '../components/actions/submit/submit.types';
import { TextProps } from '../components/fields/text/text.types';
import { Form } from '../hooks/useForms/useForms';

export type FormId = string;

export type Id = string;

export type FormTypes = 'field-text' | 'action-submit';

export type FieldProps = TextProps | SubmitFieldProps;

export type Script = {
  fn: string;
  dependesies?: string[];
};

export type ScriptFn = (
  formMethods: Form,
  forms: Record<string, Form>,
  formId: string
) => any;
