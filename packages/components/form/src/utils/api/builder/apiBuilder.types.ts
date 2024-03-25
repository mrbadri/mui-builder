import { AxiosRequestConfig, AxiosStatic } from 'axios';

export type ApiInstance = AxiosStatic;

export type ApiConfigs = AxiosRequestConfig;

export type ApiBuilderProps = {
  apiInstance: ApiInstance;
  apiConfigs: ApiConfigs;
};
