import { FC, useLayoutEffect } from 'react';
import { useForm } from 'react-hook-form';

import { FormWrapperProps } from './formWrapper.types';

import useForms from '../../hooks/useForms/useForms';

const FormWrapper: FC<FormWrapperProps> = ({ children, formId }) => {
  const formMethod = useForm();
  const { setForm, forms } = useForms();

  useLayoutEffect(() => {
    setForm(formId, formMethod);
  }, [formId, formMethod, setForm]);

  if (forms?.[formId]) {
    return children;
  }

  return <></>;
};

export default FormWrapper;
