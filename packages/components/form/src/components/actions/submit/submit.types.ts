import { FieldValues } from 'react-hook-form';

import { Form } from '../../../hooks/useForms/useForms.types';
import {  FormId } from '../../../types/public.types';
import { ActionProps } from '../action/action.types';
import { Api } from '../../../types/api.types';
import { SkeletonOwnProps } from '@mui/material';

export type UseSubmitLoadingProps = SkeletonOwnProps;

export type SubmitFieldProps = ActionProps & {
  formId: FormId;
  api?: Api;
  loadingProps?: UseSubmitLoadingProps;
};

export type DynamicAction = (
  formMethod: Form,
  forms: Record<string, Form>,
  formId: FormId,
  Value: FieldValues
) => void;
