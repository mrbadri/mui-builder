import { FieldValues } from 'react-hook-form';

import { Api } from '../../../../../../types/api.types';
import { Form } from '../../../hooks/useForms/useForms.types';
import { FormId } from '../../../types/public.types';
import { ActionProps } from '../action/action.types';

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
