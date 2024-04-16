import { LoadingProps } from '../../../types/configs.type';

const useTextLoading = (props: LoadingProps) => {
  const { animation = 'wave', sx, ...otherProps } = props;

  const getTextLoadingProps = () => ({
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

  return { getTextLoadingProps };
};

export default useTextLoading;
