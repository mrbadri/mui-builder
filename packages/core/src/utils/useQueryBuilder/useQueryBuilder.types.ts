import { Form } from '../../modules/form/src/hooks/useForms/useForms.types';
import { FormId, Forms } from '../../modules/form/src/types/public.types';
import { ApiError } from '../../types/api.types';
import { ApiBuilderProps } from '../api/builder/apiBuilder.types';

export type ApiQuery<Data = unknown> = {
  enable?: string | boolean;
  onSuccess?: string | ((data: Data) => void);
  onError?: string | ((error: ApiError) => void);
};

export type EnableBuilderFn = (
  formMethod: Form,
  forms: Forms,
  formId: FormId
) => boolean;

export type OnErrorBuilderFn = (
  formMethod: Form,
  forms: Forms,
  formId: FormId
) => (error: ApiError) => void;

export type OnSuccessBuilderFn<Data> = (
  formMethod: Form,
  forms: Forms,
  formId: FormId
) => (data: Data) => void;

export type UseQueryBuilderProps<Data> = ApiBuilderProps & {
  apiQuery: ApiQuery<Data>;
};
