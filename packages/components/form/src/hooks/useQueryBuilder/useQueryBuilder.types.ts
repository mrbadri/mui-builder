import { FormId, Forms } from "../../types/public.types";
import { ApiBuilderProps } from "../../utils/api/builder/apiBuilder.types";
import { Form } from "../useForms/useForms.types";

export type ApiQuery<Data> = {
  enable?: string | boolean;
  onSuccess?: (data: Data) => void;
  onError?: (error: Error) => void;
};

export type EnableBuilderFn = (
  formMethods: Form,
  forms: Forms,
  formId: FormId
) => boolean;

export type OnErrorBuilderFn = (
  formMethods: Form,
  forms: Forms,
  formId: FormId
) => (error: Error) => void;

export type OnSuccessBuilderFn<Data> = (
  formMethods: Form,
  forms: Forms,
  formId: FormId
) => (data: Data) => void;

export type UseQueryBuilderProps<Data> = ApiBuilderProps & {
  apiQuery: ApiQuery<Data>;
};