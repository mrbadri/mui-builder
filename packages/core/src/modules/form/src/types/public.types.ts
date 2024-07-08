import { ReactNode } from 'react';

import { SkeletonOwnProps } from '@mui/material';

import { SubmitFieldProps } from '../components/actions/submit/submit.types';
import { AutoCompleteProps } from '../components/fields/autoComplete/autoComplete.types';
import { CheckboxProps } from '../components/fields/checkbox/checkbox.types';
import { SelectProps } from '../components/fields/select/select.types';
import { TextProps } from '../components/fields/text/text.types';
import { Form } from '../hooks/useForms/useForms.types';

export type FormId = string;

export type Forms = Record<string, Form>;

export type Id = string;

export type FormTypes =
  | 'field-text'
  | 'action-submit'
  | 'auto-complete'
  | 'checkbox'
  | 'select';

export type Option = {
  name: string;
  id: number | string;
};

export type FieldProps =
  | TextProps
  | SubmitFieldProps
  | AutoCompleteProps<Option>
  | CheckboxProps
  | SelectProps;

export type Dependesies = string[];

export type LoadingProps = SkeletonOwnProps;
