import { ActionSubmitFieldProps } from "../components/actions/submit/submit.types";
import { TextProps } from "../components/fields/text/text.types";

export type FormId = { formId: string };

export type Id = {
  id: string;
};

export type FormTypes = 'field-text' | "action-submit";

export type FieldProps = TextProps | ActionSubmitFieldProps;
