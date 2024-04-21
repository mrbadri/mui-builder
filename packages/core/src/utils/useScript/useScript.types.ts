import { Form } from '../../modules/form/src/hooks/useForms/useForms.types';
import { SetProps } from '../../modules/form/src/hooks/usePropsController/usePropsController.types';
import { FormId, Forms } from '../../modules/form/src/types/public.types';
import { Script } from '../../modules/form/src/types/script.types';

export type UseScriptProps = {
  script?: Script;
  formMethod: Form;
  forms: Forms;
  formId: FormId;
  setProps: SetProps;
};
