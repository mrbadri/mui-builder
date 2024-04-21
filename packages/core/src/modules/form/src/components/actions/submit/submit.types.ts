import { FieldValues } from 'react-hook-form';

import { Form, FormId } from '@mui-builder/form';
import { Api } from '@mui-builder/types/api.types';

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
