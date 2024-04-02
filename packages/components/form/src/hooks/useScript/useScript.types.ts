import { Dependesies, FormId, Forms, Script } from '../../types/public.types';
import { Form } from '../useForms/useForms.types';

export type UseScriptProps = {
  script?: Script;
  dependesies?: Dependesies;
  formMethod: Form;
  forms: Forms;
  formId: FormId;
};
