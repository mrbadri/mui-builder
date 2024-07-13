import {
  FormControlLabelProps,
  RadioGroupProps as MuiRadioGroupProps,
  RadioProps as MuiRadioProps,
} from '@mui/material';

import { Api } from '@mui-builder/types/api.types';
import { Script } from '@mui-builder/types/script.types';

import { Dependencies, FormId, Id } from '../../../types/public.types';
import { Rule } from '../../../types/validation.types';

export type RadioProps = Omit<FormControlLabelProps, 'control'> & {
  radioInputProps?: MuiRadioProps;
};

export type RadioGroupProps = MuiRadioGroupProps & {
  id: Id;
  formId: FormId;
  script?: Script;
  dependesies?: Dependencies;
  propsController?: Record<string, any>;
  api?: Api;
  rule?: Rule;
  show?: boolean;
  radioInputsList: RadioProps[];
};
