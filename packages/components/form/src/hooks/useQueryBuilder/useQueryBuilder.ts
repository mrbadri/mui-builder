import { convertFn, isStrFn } from '@mui-builder/utils';
import { AxiosResponse } from 'axios';
import apiBuilder from '../../utils/api/builder/apiBuilder';
import useQuery from '../useQuery/useQuery';
import {
  EnableBuilderFn,
  OnErrorBuilderFn,
  OnSuccessBuilderFn,
  UseQueryBuilderProps,
} from './useQueryBuilder.types';
import { ApiError } from '../../types/public.types';

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
