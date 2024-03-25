import { convertFn, isStrFn } from '@mui-builder/utils';
import {
  ApiBuilderProps,
  dataBuilderFn,
  headersBuilderFn,
  paramsBuilderFn,
  urlBuilderFn,
} from './apiBuilder.types';

const apiBuilder = async ({
  apiInstance,
  apiConfigs,
  formMethods,
}: ApiBuilderProps) => {
  const { url, data, params, headers, ...configs } = apiConfigs;

  const urlBuilder = () => {
    if (isStrFn(url))
      return convertFn<urlBuilderFn>(url, 'formMethods')(formMethods);
    return url;
  };

  const dataBuilder = () => {
    if (isStrFn(data))
      return convertFn<dataBuilderFn>(data, 'formMethods')(formMethods);
    return data;
  };

  const paramsBuilder = () => {
    if (isStrFn(params))
      return convertFn<paramsBuilderFn>(params, 'formMethods')(formMethods);
    return params;
  };

  const headersBuilder = () => {
    if (isStrFn(headers))
      return convertFn<headersBuilderFn>(
        JSON.stringify(headers),
        'formMethods'
      )(formMethods);
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
