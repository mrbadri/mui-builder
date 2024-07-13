import { LoadingProps } from '@mui-builder/types/configs.type';

const useNumberFieldLoading = (props: LoadingProps) => {
  const { animation = 'wave', sx, ...otherProps } = props;

  const getNumberFieldLoadingProps = () => ({
    sx: {
      display: 'inline-block',
      transform: 'unset',
      width: '255px',
      height: '56px',
      mx: 0.5,
      ...sx,
    },
    animation,
    ...otherProps,
  });

  return { getNumberFieldLoadingProps };
};

export default useNumberFieldLoading;
