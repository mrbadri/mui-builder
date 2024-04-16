import { SkeletonOwnProps } from '@mui/material';

export type LoadingProps = SkeletonOwnProps & { show?: boolean };

export type Configs = {
  loading: LoadingProps;
};
