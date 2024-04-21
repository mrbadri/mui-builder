import { AxiosHeaders, AxiosRequestConfig, AxiosStatic } from 'axios';
import { Form } from 'packages/core/src/modules/form/src/hooks/useForms/useForms.types';
import { FormId, Forms } from 'packages/core/src/modules/form/src/types/public.types';

export type ApiInstance = AxiosStatic;

export type ApiConfigs = Omit<AxiosRequestConfig, 'headers'> & {
  headers?: AxiosHeaders | string;
};

export type ApiBuilderProps = {
  apiInstance: ApiInstance;
  apiConfigs: ApiConfigs;
  formMethod: Form;
  forms: Forms;
  formId: FormId;
};

export type urlBuilderFn = (
  formMethod: Form,
  forms: Forms,
  formId: FormId
) => string;

export type dataBuilderFn = (
  formMethod: Form,
  forms: Forms,
  formId: FormId
) => unknown;

export type paramsBuilderFn = (
  formMethod: Form,
  forms: Forms,
  formId: FormId
) => unknown;

export type headersBuilderFn = (
  formMethod: Form,
  forms: Forms,
  formId: FormId
) => AxiosHeaders;
