import { FormId, Forms, Script } from '../../types/public.types';
import { Form } from "../useForms/useForms.types";

export type UseScriptProps = {
  script?: Script;
  formMethod: Form;
  forms: Forms;
  formId: FormId;
};