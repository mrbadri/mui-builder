import { useCallback, useMemo } from 'react';

import { convertFn } from '@mui-builder/utils';

import { ScriptFn } from '../../types/script.types';
import { UseScriptProps } from './useScript.types';

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
        script,
        'formMethod',
        'forms',
        'formId',
        'setProps'
      )(formMethod, forms, formId, setProps);
    },
    [script]
  );

  const scriptResult = useMemo(
    () => scriptFn(formMethod, forms, formId, setProps),
    [scriptFn, formMethod, forms, formId, setProps]
  );

  return { scriptResult: scriptFn(formMethod, forms, formId, setProps) };
};

export default UseScript;
