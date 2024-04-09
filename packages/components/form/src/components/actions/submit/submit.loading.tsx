import { Skeleton } from '@mui/material';

import { LoadingProps } from '../../../types/configs.type';
import useSubmitLoading from './useSubmit.loading';

const SubmitLoading = (props: LoadingProps) => {
  console.log('propsss', props);

  const { getSubmitLoadingProps } = useSubmitLoading(props);

  return <Skeleton {...getSubmitLoadingProps()} />;
};

export default SubmitLoading;
