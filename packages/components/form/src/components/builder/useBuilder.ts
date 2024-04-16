import { BuilderProps } from './builder.types';

import useForms from '../../hooks/useForms/useForms';

const useBuilder = (allProps: BuilderProps) => {
  const { props, type, fieldId, configs } = allProps;

  const formId = props.formId;
  const forms = useForms((state) => state.forms);
  const hasForm = props.formId in forms;

  const getFormWrapperProps = () => ({ formId });
  const getSelectorProps = () => ({
    props,
    type,
    fieldId,
    configs,
  });

  return { hasForm, getFormWrapperProps, getSelectorProps };
};

export default useBuilder;
