import { Skeleton } from '@mui/material';

import { LoadingProps } from '@mui-builder/types/configs.type';

import usePasswordLoading from './usePassword.loading';

const PasswordLoading = (props: LoadingProps) => {
  const { getTextLoadingProps } = usePasswordLoading(props);

  return <Skeleton {...getTextLoadingProps()} />;
};

export default PasswordLoading;
