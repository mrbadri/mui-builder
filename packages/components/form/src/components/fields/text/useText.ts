import { useController } from 'react-hook-form';
import useForms from '../../../hooks/useForms/useForms';
import UseScript from '../../../hooks/useScript/useScript';
import { TextProps } from './text.types';

const UseText = (props: TextProps) => {
  const { formId, script, ...textFieldProps } = props;

  const { forms } = useForms();
  const formMethod = forms?.[formId];

  const { scriptResult } = UseScript({
    script,
    formMethod,
    forms,
    formId,
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
  });

  return { getFieldProps };
};

export default UseText;
