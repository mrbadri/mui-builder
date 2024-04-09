import { LoadingProps } from '../../../types/public.types';

const useTextLoading = (props: LoadingProps) => {
  const getTextLoadingProps = () => ({
    ...props,
    sx: { display: 'inline-block', width: 300, height: 50, mx: 1, ...props.sx },
  });

  return { getTextLoadingProps };
};

export default useTextLoading;
