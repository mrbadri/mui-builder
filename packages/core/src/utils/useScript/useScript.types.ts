import { Form, FormId, Forms, SetProps } from '@mui-builder/form';
import { Script } from '@mui-builder/types/script.types';

export type UseScriptProps = {
  script?: Script;
  formMethod: Form;
  forms: Forms;
  formId: FormId;
  setProps: SetProps;
};
