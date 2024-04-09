import { ApiQuery } from '../hooks/useQueryBuilder/useQueryBuilder.types';
import { ApiConfigs } from '../utils/api/builder/apiBuilder.types';

export type Api = {
  configs: ApiConfigs;
  queries: ApiQuery;
};

export type ApiError = Error | unknown;
