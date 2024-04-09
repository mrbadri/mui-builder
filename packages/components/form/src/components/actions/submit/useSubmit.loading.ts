import { LoadingProps } from '../../../types/configs.type';

const useSubmitLoading = (props: LoadingProps) => {
  const getSubmitLoadingProps = () => ({
    ...props,
    sx: { display: 'inline-block', width: 100, height: 50, ...props.sx },
  });

  return {
    getSubmitLoadingProps,
  };
};

export default useSubmitLoading;
