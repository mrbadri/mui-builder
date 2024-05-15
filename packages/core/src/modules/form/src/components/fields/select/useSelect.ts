import { SelectProps } from './select.types';

const useSelect = (props: SelectProps) => {
  const {
    formControlProps,
    inputLableProps,
    menuItemsList,
    ...restSelectProps
  } = props;

  const getSelectProps = () => ({
    ...restSelectProps,
  });
  const getInputLableProps = () => ({
    ...inputLableProps,
  });

  const getFormControlProps = () => ({
    ...formControlProps,
  });

  return {
    getSelectProps,
    getInputLableProps,
    getFormControlProps,
    menuItemsList,
  };
};

export default useSelect;
