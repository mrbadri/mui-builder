import { useEffect, useState } from 'react';
import { UseQueryProps, UseQueryResult } from './useQuery.types';

function useQuery<Data>({
  enable,
  queryFn,
  onError,
  onSuccess,
}: UseQueryProps<Data>): UseQueryResult<Data> {
  const [data, setData] = useState<Data | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const result = await queryFn();
      setData(result);
      setIsLoading(false);
      onSuccess?.(result);
    } catch (error: any) {
      setIsError(error);
      setIsLoading(false);
      onError?.(error);
    }
  };

  useEffect(() => {
    if (enable) {
      fetchData();
    }
  }, [enable]);

  const refetch = () => {
    fetchData();
  };

  return { data, isLoading, isError, refetch };
}

export default useQuery;
