import { SkeletonOwnProps } from '@mui/material';

import { SubmitFieldProps } from '../components/actions/submit/submit.types';
import { RadioGroupProps } from '../components/fields/radio/radio.types';
import { TextProps } from '../components/fields/text/text.types';
import { Form } from '../hooks/useForms/useForms.types';

export type FormId = string;

export type Forms = Record<string, Form>;

export type Id = string;

export type FormTypes = 'field-text' | 'action-submit' | 'radio';

export type FieldProps = TextProps | SubmitFieldProps | RadioGroupProps;

export type Dependesies = string[];

export type LoadingProps = SkeletonOwnProps;
