import { SubmitFieldProps } from '../components/actions/submit/submit.types';
import { TextProps } from '../components/fields/text/text.types';
import { Form } from '../hooks/useForms/useForms.types';

export type FormId = string;

export type Forms = Record<string, Form>;

export type Id = string;

export type FormTypes = 'field-text' | 'action-submit';

export type FieldProps = TextProps | SubmitFieldProps;

export type Dependesies = string[];
