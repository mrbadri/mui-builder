import { RadioProps } from './radio.types';

const useRadio = (props: RadioProps) => {
  const { radioInputProps, ...restRadioProps } = props;

  const getRadioInputProps = () => ({ ...radioInputProps });

  const getFormControlLabelProps = () => ({ ...restRadioProps });

  return { getRadioInputProps, getFormControlLabelProps };
};

export default useRadio;