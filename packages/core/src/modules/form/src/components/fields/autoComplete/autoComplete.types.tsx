import {
  AutocompleteProps,
  AutocompleteRenderInputParams,
  ChipTypeMap,
  TextFieldProps,
} from '@mui/material';

import { Api } from '@mui-builder/types/api.types';
import { Script } from '@mui-builder/types/script.types';

import { Dependesies, FormId, Id } from '../../../types/public.types';
import { Rule } from '../../../types/validation.types';

export type AutoCompleteOptions = {
  name: number | string;
  id: number | string;
};

export type AutoCompleteProps<
  Value,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent']
> = Omit<
  AutocompleteProps<Value, Multiple, DisableClearable, FreeSolo, ChipComponent>,
  'renderInput'
> & {
  id: Id;
  formId: FormId;
  script?: Script;
  dependencies?: Dependesies;
  propsController?: Record<string, any>;
  api?: Api;
  rule?: Rule;
  show?: boolean;
  options: AutoCompleteOptions[];
  renderInput?: (params: AutocompleteRenderInputParams) => React.ReactNode;
  innerTextFieldProps?: Partial<TextFieldProps>;
};
