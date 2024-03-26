import { useCallback } from 'react';
import { FormId, Forms, Script, ScriptFn } from '../../types/public.types';
import { convertFn } from '@mui-builder/utils';
import { useWatch } from 'react-hook-form';
import { Form } from '../useForms/useForms';
import { SetProps } from '../usePropsController/usePropsController';

export type UseScriptProps = {
  script?: Script;
  formMethod: Form;
  forms: Forms;
  formId: FormId;
  setProps: SetProps;
};

const UseScript = ({
  script,
  formMethod,
  forms,
  formId,
  setProps,
}: UseScriptProps) => {
  const scriptFn = useCallback<ScriptFn>(
    (formMethod, forms, formId, setProps) => {
      return convertFn<ScriptFn>(
        script?.fn,
        'formMethods',
        'forms',
        'formId',
        'setProps'
      )(formMethod, forms, formId, setProps);
    },
    [script]
  );

  useWatch({
    control: formMethod.control,
    name: script?.dependesies ?? [],
  });

  return { scriptResult: scriptFn(formMethod, forms, formId, setProps) };
};

export default UseScript;
