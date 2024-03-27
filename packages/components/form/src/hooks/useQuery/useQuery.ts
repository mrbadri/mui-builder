import { useCallback, useEffect, useState } from 'react';
import { UseQueryProps, UseQueryResult } from './useQuery.types';

function useQuery<Data>({
  enable,
  queryFn,
  onError,
  onSuccess,
}: UseQueryProps<Data>): UseQueryResult<Data> {
  const [data, setData] = useState<Data | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const result = await queryFn();
      setData(result);
      setIsLoading(false);
      onSuccess?.(result);
    } catch (error: any) {
      setIsError(true);
      setError(error);
      setIsLoading(false);
      onError?.(error);
    }
  }, [onError, onSuccess, queryFn]);

  useEffect(() => {
    if (enable) {
      fetchData();
    }
  }, [enable, fetchData]);

  const refetch = () => {
    fetchData();
  };

  return { data, isLoading, isError, error, refetch };
}

export default useQuery;
