import { BuilderProps } from './builder.types';

import useForms from '../../hooks/useForms/useForms';

const useBuilder = (props: BuilderProps) => {
  const { fieldProps, fieldType, fieldId, configs } = props;

  const formId = fieldProps.formId;
  const forms = useForms((state) => state.forms);
  const hasForm = fieldProps.formId in forms;

  const getFormWrapperProps = () => ({ formId });
  const getSelectorProps = () => ({
    fieldProps,
    fieldType,
    fieldId,
    configs,
  });

  return { hasForm, getFormWrapperProps, getSelectorProps };
};

export default useBuilder;
