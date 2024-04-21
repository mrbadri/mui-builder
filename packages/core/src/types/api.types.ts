import { ApiConfigs } from '../utils/api/builder/apiBuilder.types';
import { ApiQuery } from '../utils/useQueryBuilder/useQueryBuilder.types';

export type Api = {
  configs: ApiConfigs;
  queries: ApiQuery;
};

export type ApiError = Error | unknown;
