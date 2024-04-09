import { UseSubmitLoadingProps } from './submit.types';

const useSubmitLoading = (props: UseSubmitLoadingProps) => {
  const getSubmitLoadingProps = () => ({
    ...props,
    sx: { display: 'inline-block', width: 100, height: 50, ...props.sx },
  });

  return {
    getSubmitLoadingProps,
  };
};

export default useSubmitLoading;
