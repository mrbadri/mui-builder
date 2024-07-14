import { Configs, FieldProps, FormTypes } from '@mui-builder/form';
import { GridProps, GridTypes } from '@mui-builder/grid';

import { SubmitFieldProps } from '../modules/form/src/components/actions/submit/submit.types';
import { AutoCompleteProps } from '../modules/form/src/components/fields/autoComplete/autoComplete.types';
import { CheckboxProps } from '../modules/form/src/components/fields/checkbox/checkbox.types';
import { NumberFieldProps } from '../modules/form/src/components/fields/number/number.types';
import { SelectProps } from '../modules/form/src/components/fields/select/select.types';
import { TextProps } from '../modules/form/src/components/fields/text/text.types';
import { Option } from '../modules/form/src/types/public.types';

export type GROUP_TYPE = 'form' | 'grid';

type FormChildsTypes =
  | { groupType: 'form'; type: 'field-text'; props: TextProps }
  | { groupType: 'form'; type: 'action-submit'; props: SubmitFieldProps }
  | {
      groupType: 'form';
      type: 'auto-complete';
      props: AutoCompleteProps<Option>;
    }
  | { groupType: 'form'; type: 'checkbox'; props: CheckboxProps }
  | { groupType: 'form'; type: 'number'; props: NumberFieldProps }
  | { groupType: 'form'; type: 'password'; props: TextProps }
  | { groupType: 'form'; type: 'select'; props: SelectProps };

type GridChildsTypes =
  | { groupType: 'grid'; type: 'container'; props: GridProps }
  | { groupType: 'grid'; type: 'item'; props: GridProps };

type ChildsTypes = FormChildsTypes | GridChildsTypes;

export type BuilderProps = {
  id?: string;
  configs?: Configs;
  // groupType: GROUP_TYPE;
  // type: FormTypes | GridTypes;
  // props: FieldProps | GridProps;
} & ChildsTypes;
