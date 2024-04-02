import { convertFn, isStrFn } from '@mui-builder/utils';
import {
  ApiBuilderProps,
  dataBuilderFn,
  headersBuilderFn,
  paramsBuilderFn,
  urlBuilderFn,
} from './apiBuilder.types';
import { AxiosHeaders } from 'axios';

const apiBuilder = async <Data>({
  apiInstance,
  apiConfigs,
  formMethod,
  forms,
  formId,
}: ApiBuilderProps) => {
  const { url, data, params, headers, ...configs } = apiConfigs;

  const urlBuilder = () => {
    if (isStrFn(url))
      return convertFn<urlBuilderFn>(
        url,
        'formMethod',
        'forms',
        'formId'
      )(formMethod, forms, formId);

    return url;
  };

  const dataBuilder = () => {
    if (isStrFn(data))
      return convertFn<dataBuilderFn>(
        data,
        'formMethod',
        'forms',
        'formId'
      )(formMethod, forms, formId);

    return data;
  };

  const paramsBuilder = () => {
    if (isStrFn(params))
      return convertFn<paramsBuilderFn>(
        params,
        'formMethod',
        'forms',
        'formId'
      )(formMethod, forms, formId);

    return params;
  };

  const headersBuilder = () => {
    if (isStrFn(headers))
      return convertFn<headersBuilderFn>(
        headers as string,
        'formMethod',
        'forms',
        'formId'
      )(formMethod, forms, formId);

    return headers as AxiosHeaders | undefined;
  };

  return apiInstance<Data>({
    ...configs,
    url: urlBuilder(),
    data: dataBuilder(),
    params: paramsBuilder(),
    headers: headersBuilder(),
  });
};

export default apiBuilder;
