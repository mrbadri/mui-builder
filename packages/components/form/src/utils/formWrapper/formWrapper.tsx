import { FC, ReactNode, useLayoutEffect } from 'react';
import { useForm } from 'react-hook-form';
import useForms from '../../hooks/useForms/useForms';

const FormWrapper: FC<{ children: ReactNode; formId: string }> = ({
  children,
  formId,
}) => {
  const formMethods = useForm();
  const { setForm, forms } = useForms();

  useLayoutEffect(() => {
    setForm(formId, formMethods);
  }, []);

  if (forms?.[formId]) {
    return children;
  }

  return <></>;
};

export default FormWrapper;
