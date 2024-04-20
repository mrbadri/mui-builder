import { FC } from 'react';

import { BuilderProps } from './builder.types';

import FormWrapper from '../../utils/formWrapper/formWrapper';
import Selector from '../../utils/selector/selector';
import useBuilder from './useBuilder';

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
