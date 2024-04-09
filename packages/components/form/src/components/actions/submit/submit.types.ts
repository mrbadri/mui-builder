import { FieldValues } from 'react-hook-form';

import { Form } from '../../../hooks/useForms/useForms.types';
import { Api } from '../../../types/api.types';
import { FormId } from '../../../types/public.types';
import { ActionProps } from '../action/action.types';

import { LoadingProps } from '../../../types/configs.type';

export type SubmitFieldProps = ActionProps & {
  formId: FormId;
  api?: Api;
  loadingProps?: LoadingProps;
};

export type DynamicAction = (
  formMethod: Form,
  forms: Record<string, Form>,
  formId: FormId,
  Value: FieldValues
) => void;
