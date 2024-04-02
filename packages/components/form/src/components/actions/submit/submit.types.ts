import { FieldValues } from 'react-hook-form';
import { Api, FormId } from '../../../types/public.types';
import { ActionProps } from '../action/action.types';
import { Form } from '../../../hooks/useForms/useForms.types';

export type SubmitFieldProps = ActionProps & {
  formId: FormId;
  api?: Api;
};

export type DynamicAction = (
  formMethod: Form,
  forms: Record<string, Form>,
  formId: FormId,
  Value: FieldValues
) => void;
