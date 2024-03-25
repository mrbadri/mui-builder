import { AxiosHeaders, AxiosRequestConfig, AxiosStatic } from 'axios';
import { Form } from '../../../hooks/useForms/useForms';

export type ApiInstance = AxiosStatic;

export type ApiConfigs = AxiosRequestConfig;

export type ApiBuilderProps = {
  apiInstance: ApiInstance;
  apiConfigs: ApiConfigs;
  formMethods: Form;
};

export type urlBuilderFn = (formMethods: Form) => string;

export type dataBuilderFn = (formMethods: Form) => unknown;

export type paramsBuilderFn = (formMethods: Form) => unknown;

export type headersBuilderFn = (formMethods: Form) => AxiosHeaders;
