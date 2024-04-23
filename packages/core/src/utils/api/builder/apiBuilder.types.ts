import { Form, FormId, Forms } from '@mui-builder/form';

import { AxiosHeaders, AxiosRequestConfig, AxiosStatic } from 'axios';

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
