import { Skeleton } from '@mui/material';

import { UseSubmitLoadingProps } from './submit.types';

import useSubmitLoading from './useSubmit.loading';

const SubmitLoading = (props: UseSubmitLoadingProps) => {
  const { getSubmitLoadingProps } = useSubmitLoading(props);

  return <Skeleton {...getSubmitLoadingProps()} />;
};

export default SubmitLoading;
