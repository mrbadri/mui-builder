import { Skeleton } from '@mui/material';

import { LoadingProps } from '@mui-builder/types/configs.type';

import useNumberFieldLoading from './useNumber.loading';

const NumberFieldLoading = (props: LoadingProps) => {
  const { getNumberFieldLoadingProps } = useNumberFieldLoading(props);

  return <Skeleton {...getNumberFieldLoadingProps()} />;
};

export default NumberFieldLoading;
