import { TextProps } from "../components/text/text.types";

export type FormId = { formId: string };

export type Id = {
  id: string;
};

export enum FIELD_TYPE {
  TEXT = 'text',
}

export type FieldProps = TextProps;
