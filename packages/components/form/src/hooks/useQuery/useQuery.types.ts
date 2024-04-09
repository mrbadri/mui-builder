import { ApiError } from "../../types/api.types";

export type QueryFunction<Data> = () => Promise<Data>;

export interface UseQueryResult<Data> {
  data: Data | null;
  isLoading: boolean;
  isError: boolean;
  error: ApiError | null;
  refetch: () => void;
}

export interface UseQueryProps<Data> {
  queryFn: QueryFunction<Data>;
  enable?: boolean;
  onSuccess?: (data: Data) => void;
  onError?: (error: ApiError) => void;
}
