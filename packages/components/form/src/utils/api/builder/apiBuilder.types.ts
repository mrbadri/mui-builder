import { AxiosHeaders, AxiosRequestConfig, AxiosStatic } from 'axios';
import { FormId, Forms } from '../../../types/public.types';
import { Form } from '../../../hooks/useForms/useForms.types';

export type ApiInstance = AxiosStatic;

export type ApiConfigs = Omit<AxiosRequestConfig, 'headers'> & {
  headers?: AxiosHeaders | string;
};

export type ApiBuilderProps = {
  apiInstance: ApiInstance;
  apiConfigs: ApiConfigs;
  formMethods: Form;
  forms: Forms;
  formId: FormId;
};

export type urlBuilderFn = (
  formMethods: Form,
  forms: Forms,
  formId: FormId
) => string;

export type dataBuilderFn = (
  formMethods: Form,
  forms: Forms,
  formId: FormId
) => unknown;

export type paramsBuilderFn = (
  formMethods: Form,
  forms: Forms,
  formId: FormId
) => unknown;

export type headersBuilderFn = (
  formMethods: Form,
  forms: Forms,
  formId: FormId
) => AxiosHeaders;
