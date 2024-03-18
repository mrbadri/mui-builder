import { FC } from 'react';
import useBuilder from './useBuilder';
import { BuilderProps } from './builder.types';
import Selector from '../../utils/selector/selector';
import FormWrapper from '../../utils/formWrapper/formWrapper';

const Builder: FC<BuilderProps> = (props) => {
  const { hasForm, getSelectorProps, getFormWrapperProps } = useBuilder(props);

  if (!hasForm)
    return (
      <FormWrapper {...getFormWrapperProps()}>
        <Selector {...getSelectorProps()} />
      </FormWrapper>
    );

  return <Selector {...getSelectorProps()} />;
};

export default Builder;
