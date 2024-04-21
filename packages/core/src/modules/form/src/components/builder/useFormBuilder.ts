import { FormBuilderProps } from './formBuilder.types';

import useForms from '../../hooks/useForms/useForms';

const useFormBuilder = (props: FormBuilderProps) => {
  const { fieldProps, fieldType, configs } = props;

  const formId = fieldProps.formId;
  const forms = useForms((state) => state.forms);
  const hasForm = fieldProps.formId in forms;

  const getFormWrapperProps = () => ({ formId });
  const getSelectorProps = () => ({
    fieldProps,
    fieldType,
    configs,
  });

  return { hasForm, getFormWrapperProps, getSelectorProps };
};

export default useFormBuilder;
