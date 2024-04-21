import { FC } from 'react';

import { FormBuilderProps } from './formBuilder.types';

import FormWrapper from '../../utils/formWrapper/formWrapper';
import FormSelector from '../../utils/selector/formSelector';
import useFormBuilder from './useFormBuilder';

const FormBuilder: FC<FormBuilderProps> = (props) => {
  const { hasForm, getSelectorProps, getFormWrapperProps } =
    useFormBuilder(props);

  if (!hasForm)
    return (
      <FormWrapper {...getFormWrapperProps()}>
        <FormSelector {...getSelectorProps()} />
      </FormWrapper>
    );

  return <FormSelector {...getSelectorProps()} />;
};

export default FormBuilder;
