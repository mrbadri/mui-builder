import Selector from '../../utils/selector/selector';
import { BuilderProps } from './builder.types';
import { FC } from 'react';
import useForms from '../../hooks/useForms/useForms';
import FormWrapper from '../../utils/formWrapper/formWrapper';

const Builder: FC<BuilderProps> = ({ fieldType, fieldProps }) => {
  const forms = useForms((state) => state.forms);
  const hasForm = fieldProps.formId in forms;

  if (!hasForm)
    return (
      <FormWrapper formId={fieldProps.formId}>
        <Selector fieldType={fieldType} fieldProps={fieldProps} />
      </FormWrapper>
    );
  return <Selector fieldType={fieldType} fieldProps={fieldProps} />;
};

export default Builder;
