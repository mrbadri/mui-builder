import { useState, useEffect } from 'react';

type QueryFunction<Data> = () => Promise<Data>;

interface UseQueryResult<Data> {
  data: Data | null;
  isLoading: boolean;
  isError: Error | null;
  refetch: () => void;
}

interface UseQueryOptions<Data> {
  onSuccess?: (data: Data) => void;
  onError?: (error: Error) => void;
}

function useQuery<Data>(
  queryFn: QueryFunction<Data>,
  enable: boolean,
  options?: UseQueryOptions<Data>
): UseQueryResult<Data> {
  const [data, setData] = useState<Data | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false); 
  const [isError, setIsError] = useState<Error | null>(null); 

  const fetchData = async () => {
    try {
      setIsLoading(true); 
      const result = await queryFn();
      setData(result);
      setIsLoading(false); 
      if (options?.onSuccess) {
        options.onSuccess(result);
      }
    } catch (error: any) {
      setIsError(error);
      setIsLoading(false); 
      if (options?.onError) {
        options.onError(error);
      }
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
