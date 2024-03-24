import { useCallback } from 'react';
import { FormId, Script, ScriptFn } from '../../types/public.types';
import { convertFunction } from '@mui-builder/utils';
import { useWatch } from 'react-hook-form';
import { Form } from '../useForms/useForms';

export type UseScriptProps = {
  script?: Script;
  formMethod: Form;
  forms: Record<string, Form>;
  formId: FormId;
};

const UseScript = ({ script, formMethod, forms, formId }: UseScriptProps) => {
  const scriptFn = useCallback<ScriptFn>(
    (formMethod, forms, formId) => {
      return convertFunction<ScriptFn>(
        script?.fn,
        'formMethods',
        'forms',
        'formId'
      )(formMethod, forms, formId);
    },
    [script]
  );

  useWatch({
    control: formMethod.control,
    name: script?.dependesies ?? [],
  });

  return { scriptResult: scriptFn(formMethod, forms, formId) };
};

export default UseScript;
