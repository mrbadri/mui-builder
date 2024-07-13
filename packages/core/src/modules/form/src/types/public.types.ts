import { SkeletonOwnProps } from '@mui/material';

import { SubmitFieldProps } from '../components/actions/submit/submit.types';
import { AutoCompleteProps } from '../components/fields/autoComplete/autoComplete.types';
import { CheckboxProps } from '../components/fields/checkbox/checkbox.types';
import { NumberFieldProps } from '../components/fields/number/number.types';
import { RadioGroupProps } from '../components/fields/radio/radio.types';
import { TextProps } from '../components/fields/text/text.types';
import { Form } from '../hooks/useForms/useForms.types';
import { SelectProps } from '../components/fields/select/select.types';

export type FormId = string;

export type Forms = Record<string, Form>;

export type Id = string;

export type FormTypes =
  | 'field-text'
  | 'action-submit'
  | 'auto-complete'
  | 'checkbox'
  | 'number'
  | 'password'
  | 'select'
  | 'radio';

export type Option = {
  name: string;
  id: number | string;
};

export type FieldProps =
  | TextProps
  | SubmitFieldProps
  | CheckboxProps
  | RadioGroupProps
  | AutoCompleteProps<Option>
  | NumberFieldProps
  | SelectProps;

export type Dependencies = string[];

export type LoadingProps = SkeletonOwnProps;
