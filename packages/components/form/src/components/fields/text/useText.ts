import { useController } from 'react-hook-form';
import useForms from '../../../hooks/useForms/useForms';
import UseScript from '../../../hooks/useScript/useScript';
import { TextProps } from './text.types';

const UseText = (props: TextProps) => {
  const { formId, script, setProps, propsController, ...textFieldProps } =
    props;

  const controlledProps = propsController?.[props.id] ?? {};

  console.log('controlledProps:', controlledProps);

  const { forms } = useForms();
  const formMethod = forms?.[formId];

  const { scriptResult } = UseScript({
    script,
    formMethod,
    forms,
    formId,
    setProps,
  });

  const { field } = useController({
    name: textFieldProps.id,
    control: formMethod.control,
  });

  const getFieldProps = () => ({
    ...field,
    ...textFieldProps,
    value: field.value ?? '',
    ...scriptResult,
    ...controlledProps,
  });

  return { getFieldProps };
};

export default UseText;
