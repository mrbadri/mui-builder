import { SubmitFieldProps } from '../components/actions/submit/submit.types';
import { TextProps } from '../components/fields/text/text.types';
import { Form } from '../hooks/useForms/useForms.types';
import { SetProps } from '../hooks/usePropsController/usePropsController.types';
import { ApiQuery } from '../hooks/useQueryBuilder/useQueryBuilder.types';
import { ApiConfigs } from '../utils/api/builder/apiBuilder.types';

export type FormId = string;

export type Forms = Record<string, Form>;

export type Id = string;

export type FormTypes = 'field-text' | 'action-submit';

export type FieldProps = TextProps | SubmitFieldProps;

export type Api = {
  configes: ApiConfigs;
  queries: ApiQuery;
};

export type Script = {
  fn: string;
  dependesies?: string[];
};

export type ScriptFn = (
  formMethod: Form,
  forms: Record<string, Form>,
  formId: string,
  setProps?: SetProps
) => any;
