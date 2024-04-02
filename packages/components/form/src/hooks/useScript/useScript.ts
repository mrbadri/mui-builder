import { convertFn } from '@mui-builder/utils';
import { useCallback } from 'react';
import { useWatch } from 'react-hook-form';
import { ScriptFn } from '../../types/public.types';
import { UseScriptProps } from './useScript.types';

const UseScript = ({ script, formMethod, forms, formId }: UseScriptProps) => {
  const scriptFn = useCallback<ScriptFn>(
    (formMethod, forms, formId) => {
      return convertFn<ScriptFn>(
        script?.fn,
        'formMethod',
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
