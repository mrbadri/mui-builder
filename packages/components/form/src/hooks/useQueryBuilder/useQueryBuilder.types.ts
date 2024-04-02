import { FormId, Forms } from '../../types/public.types';
import { ApiBuilderProps } from '../../utils/api/builder/apiBuilder.types';
import { Form } from '../useForms/useForms.types';

export type ApiQuery<Data = unknown> = {
  enable?: string | boolean;
  onSuccess?: string | ((data: Data) => void);
  onError?: string | ((error: Error) => void);
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
) => (error: Error) => void;

export type OnSuccessBuilderFn<Data> = (
  formMethod: Form,
  forms: Forms,
  formId: FormId
) => (data: Data) => void;

export type UseQueryBuilderProps<Data> = ApiBuilderProps & {
  apiQuery: ApiQuery<Data>;
};
