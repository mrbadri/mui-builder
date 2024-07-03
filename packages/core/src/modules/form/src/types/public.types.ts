import { SkeletonOwnProps } from '@mui/material';

import { SubmitFieldProps } from '../components/actions/submit/submit.types';
import {
  AutoCompleteOptions,
  AutoCompleteProps,
} from '../components/fields/autoComplete/autoComplete.types';
import { CheckboxProps } from '../components/fields/checkbox/checkbox.types';
import { TextProps } from '../components/fields/text/text.types';
import { Form } from '../hooks/useForms/useForms.types';
import { NumberFieldProps } from '../components/fields/number/number.types';

export type FormId = string;

export type Forms = Record<string, Form>;

export type Id = string;

export type FormTypes =
  | 'field-text'
  | 'action-submit'
  | 'auto-complete'
  | 'checkbox'
  | 'number';

export type FieldProps =
  | TextProps
  | SubmitFieldProps
  | AutoCompleteProps<AutoCompleteOptions>
  | CheckboxProps
  | NumberFieldProps

export type Dependesies = string[];

export type LoadingProps = SkeletonOwnProps;
