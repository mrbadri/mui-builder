import Selector from '../../utils/selector/selector';
import FormProviderWrapper from '../../utils/formProvider/formProvider';
import { useForm } from 'react-hook-form';
import { BuilderProps } from './builder.types';
import { FC } from 'react';

const Builder: FC<BuilderProps> = ({ fieldType, fieldProps }) => {
  const useFormMethods = useForm();
  return (
    <FormProviderWrapper
      useFormMethods={useFormMethods}
      onSubmit={useFormMethods.handleSubmit(() => {
        console.log('onSubmit method');
      })}
      other={{ ...fieldProps }}
    >
      <Selector fieldType={fieldType} fieldProps={fieldProps} />
    </FormProviderWrapper>
  );
};

export default Builder;
