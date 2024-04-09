import { useCallback } from 'react';

import { convertFn } from '@mui-builder/utils';

import { UseScriptProps } from './useScript.types';
import { ScriptFn } from '../../types/script.types';

const UseScript = ({ script, formMethod, forms, formId }: UseScriptProps) => {
  const scriptFn = useCallback<ScriptFn>(
    (formMethod, forms, formId) => {
      return convertFn<ScriptFn>(
        script,
        'formMethod',
        'forms',
        'formId'
      )(formMethod, forms, formId);
    },
    [script]
  );

  return { scriptResult: scriptFn(formMethod, forms, formId) };
};

export default UseScript;
