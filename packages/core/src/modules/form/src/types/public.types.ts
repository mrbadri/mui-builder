import { SkeletonOwnProps } from '@mui/material';

import { SubmitFieldProps } from '../components/actions/submit/submit.types';
import { TextProps } from '../components/fields/text/text.types';
import { Form } from '../hooks/useForms/useForms.types';
import { SelectProps } from '../components/fields/select/select.types';

export type FormId = string;

export type Forms = Record<string, Form>;

export type Id = string;

export type FormTypes = 'field-text' | 'action-submit' | 'select';

export type FieldProps = TextProps | SubmitFieldProps | SelectProps;

export type Dependesies = string[];

export type LoadingProps = SkeletonOwnProps;
