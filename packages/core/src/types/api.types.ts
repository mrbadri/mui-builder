import { ApiConfigs } from '@mui-builder/utils/api/builder/apiBuilder.types';
import { ApiQuery } from '@mui-builder/utils/useQueryBuilder/useQueryBuilder.types';

export type Api = {
  configs: ApiConfigs;
  queries: ApiQuery;
};

export type ApiError = Error | unknown;
