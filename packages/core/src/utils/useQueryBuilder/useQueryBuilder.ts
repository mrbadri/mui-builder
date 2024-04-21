import { ApiError } from '@mui-builder/types/api.types';
import apiBuilder from '@mui-builder/utils/api/builder/apiBuilder';
import convertFn from '@mui-builder/utils/convertFn/convertFn';
import isStrFn from '@mui-builder/utils/isStrFn/isStrFn';
import useQuery from '@mui-builder/utils/useQuery/useQuery';

import { AxiosResponse } from 'axios';

import {
  EnableBuilderFn,
  OnErrorBuilderFn,
  OnSuccessBuilderFn,
  UseQueryBuilderProps,
} from './useQueryBuilder.types';

const useQueryBuilder = <T>({
  formId,
  forms,
  formMethod,
  apiConfigs,
  apiInstance,
  apiQuery,
}: UseQueryBuilderProps<AxiosResponse<T, unknown>>) => {
  const { enable, onError, onSuccess } = apiQuery;

  const api = async () =>
    apiBuilder<T>({
      formId,
      forms,
      formMethod,
      apiConfigs,
      apiInstance,
    });

  const enableBuilder = () => {
    if (isStrFn(enable))
      return convertFn<EnableBuilderFn>(
        enable as string,
        'formMethod',
        'forms',
        'formId'
      )(formMethod, forms, formId);

    return enable as boolean;
  };
  const onErrorBuilder = () => {
    if (isStrFn(onError))
      return convertFn<OnErrorBuilderFn>(
        onError as string,
        'formMethod',
        'forms',
        'formId'
      )(formMethod, forms, formId);

    return onError as (error: ApiError) => void;
  };
  const onSuccessBuilder = () => {
    if (isStrFn(onSuccess))
      return convertFn<OnSuccessBuilderFn<AxiosResponse<T, unknown>>>(
        onSuccess as string,
        'formMethod',
        'forms',
        'formId'
      )(formMethod, forms, formId);

    return onSuccess as (data: unknown) => void;
  };

  return useQuery<AxiosResponse<T, unknown>>({
    queryFn: api,
    enable: enableBuilder(),
    onError: onErrorBuilder(),
    onSuccess: onSuccessBuilder(),
  });
};

export default useQueryBuilder;
