import { FC } from 'react';

import { FormBuilderProps } from './formBuilder.types';

import FormWrapper from '../../utils/formWrapper/formWrapper';
import Selector from '../../utils/selector/selector';
import useFormBuilder from './useFormBuilder';

const FormBuilder: FC<FormBuilderProps> = (props) => {
  const { hasForm, getSelectorProps, getFormWrapperProps } =
    useFormBuilder(props);

  if (!hasForm)
    return (
      <FormWrapper {...getFormWrapperProps()}>
        <Selector {...getSelectorProps()} />
      </FormWrapper>
    );

  return <Selector {...getSelectorProps()} />;
};

export default FormBuilder;
