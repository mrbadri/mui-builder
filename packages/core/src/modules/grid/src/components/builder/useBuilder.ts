import { BuilderProps } from './builder.types';

const useBuilder = (props: BuilderProps) => {
  const { gridProps, gridType } = props;

  const getSelectorProps = () => ({
    gridProps,
    gridType,
  });

  return { getSelectorProps };
};

export default useBuilder;
