import { Form, FormId, Forms } from '@mui-builder/form';
import { ApiError } from '@mui-builder/types/api.types';
import { ApiBuilderProps } from '@mui-builder/utils/api/builder/apiBuilder.types';

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
