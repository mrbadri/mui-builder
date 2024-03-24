import { FieldValues } from 'react-hook-form';
import { Form } from '../../../hooks/useForms/useForms';
import { FormId } from '../../../types/public.types';
import { ActionProps } from '../action/action.types';

export type SubmitFieldProps = ActionProps & {
  formId: FormId
};

export type DynamicAction = (
  formMethods: Form,
  forms: Record<string, Form>,
  formId: FormId,
  Value: FieldValues
) => void;
