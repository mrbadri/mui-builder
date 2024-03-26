import useForms from '../../hooks/useForms/useForms';
import usePropsController from '../../hooks/usePropsController/usePropsController';
import { BuilderProps } from './builder.types';

const useBuilder = (props: BuilderProps) => {
  const { fieldProps, fieldType } = props;

  const { propsController, setProps } = usePropsController();

  const formId = fieldProps.formId;
  const forms = useForms((state) => state.forms);
  const hasForm = fieldProps.formId in forms;

  const getFormWrapperProps = () => ({ formId });
  const getSelectorProps = () => ({
    fieldProps,
    fieldType,
    propsController,
    setProps,
  });

  return { hasForm, getFormWrapperProps, getSelectorProps };
};

export default useBuilder;
