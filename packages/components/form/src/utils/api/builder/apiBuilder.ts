import { convertFn, isStrFn } from '@mui-builder/utils';
import { ApiBuilderProps } from './apiBuilder.types';

const apiBuilder = async ({ apiInstance, apiConfigs }: ApiBuilderProps) => {
  const { url, data, params, headers, ...configs } = apiConfigs;

  const urlBuilder = () => {
    if (isStrFn(url))
      return convertFn<(url: string) => string>(url, 'test')('test');
    return url;
  };

  const dataBuilder = () => {
    if (isStrFn(data))
      return convertFn<(data: unknown) => any>(data, 'test')('test');
    return data;
  };

  const paramsBuilder = () => {
    if (isStrFn(params)) return convertFn<any>(params, 'test')('test');
    return params;
  };

  const headersBuilder = () => {
    if (isStrFn(headers)) return convertFn<any>(headers as any, 'test')('test');
    return headers;
  };

  return apiInstance({
    ...configs,
    url: urlBuilder(),
    data: dataBuilder(),
    params: paramsBuilder(),
    headers: headersBuilder(),
  });
};

export default apiBuilder;
