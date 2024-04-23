import { Skeleton } from '@mui/material';

import { LoadingProps } from '@mui-builder/types/configs.type';

import useSubmitLoading from './useSubmit.loading';

const SubmitLoading = (props: LoadingProps) => {
  const { getSubmitLoadingProps } = useSubmitLoading(props);

  return <Skeleton {...getSubmitLoadingProps()} />;
};

export default SubmitLoading;
