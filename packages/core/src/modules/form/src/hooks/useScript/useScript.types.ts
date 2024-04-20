import { FormId, Forms } from '../../types/public.types';
import { Script } from '../../types/script.types';
import { Form } from '../useForms/useForms.types';
import { SetProps } from '../usePropsController/usePropsController.types';

export type UseScriptProps = {
  script?: Script;
  formMethod: Form;
  forms: Forms;
  formId: FormId;
  setProps: SetProps;
};
