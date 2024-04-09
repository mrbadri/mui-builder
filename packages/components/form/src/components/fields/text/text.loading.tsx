import { Skeleton } from '@mui/material';

import { LoadingProps } from '../../../types/public.types';

import useTextLoading from './useText.loading';

const TextLoading = (props: LoadingProps) => {
  const { getTextLoadingProps } = useTextLoading(props);

  return <Skeleton {...getTextLoadingProps()} />;
};

export default TextLoading;
