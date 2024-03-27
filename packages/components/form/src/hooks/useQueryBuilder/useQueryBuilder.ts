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

const useQueryBuilder = <T>({
  formId,
  forms,
  formMethods,
  apiConfigs,
  apiInstance,
  apiQuery,
}: UseQueryBuilderProps<AxiosResponse<T, any>>) => {
  const { enable, onError, onSuccess } = apiQuery;

  const api = async () =>
    apiBuilder<T>({
      formId,
      forms,
      formMethods,
      apiConfigs,
      apiInstance,
    });

  const enableBuilder = () => {
    if (isStrFn(enable))
      return convertFn<EnableBuilderFn>(
        enable as string,
        'formMethods',
        'forms',
        'formId'
      )(formMethods, forms, formId);

    return enable as boolean;
  };
  const onErrorBuilder = () => {
    if (isStrFn(onError))
      return convertFn<OnErrorBuilderFn>(
        onError,
        'formMethods',
        'forms',
        'formId'
      )(formMethods, forms, formId);

    return onError;
  };
  const onSuccessBuilder = () => {
    if (isStrFn(onSuccess))
      return convertFn<OnSuccessBuilderFn<AxiosResponse<T, any>>>(
        onSuccess,
        'formMethods',
        'forms',
        'formId'
      )(formMethods, forms, formId);

    return onSuccess;
  };

  return useQuery<AxiosResponse<T, any>>({
    queryFn: api,
    enable: enableBuilder(),
    onError: onErrorBuilder(),
    onSuccess: onSuccessBuilder(),
  });
};

export default useQueryBuilder;
