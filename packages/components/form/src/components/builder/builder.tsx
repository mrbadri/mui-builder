import Selector from '../../utils/selector/selector';
import { useForm } from 'react-hook-form';
import { BuilderProps } from './builder.types';
import { FC } from 'react';
import useForms from '../../hooks/useForms/useForms';

const Builder: FC<BuilderProps> = ({ fieldType, fieldProps }) => {
  const formMethods = useForm();
  const { forms, setForm } = useForms();

  if (!forms?.[fieldProps.formId]) {
    setForm(fieldProps.formId, formMethods);
  }

  return <Selector fieldType={fieldType} fieldProps={fieldProps} />;
};

export default Builder;
