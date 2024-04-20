import { LoadingProps } from '../../../types/configs.type';

const useSubmitLoading = (props: LoadingProps) => {
  const { animation = 'wave', sx, ...otherProps } = props;

  const getSubmitLoadingProps = () => ({
    sx: {
      display: 'inline-block',
      transform: 'unset',
      width: '101px',
      height: '56px',
      mx: 0.5,
      ...sx,
    },
    animation,
    ...otherProps,
  });

  return {
    getSubmitLoadingProps,
  };
};

export default useSubmitLoading;
