import { GridBuilderProps } from './gridBuilder.types';

const useGridBuilder = (props: GridBuilderProps) => {
  const { gridProps, gridType } = props;

  const getSelectorProps = () => ({
    gridProps,
    gridType,
  });

  return { getSelectorProps };
};

export default useGridBuilder;
