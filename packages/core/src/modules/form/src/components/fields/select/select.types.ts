import {
  FormControlProps,
  MenuItemProps,
  SelectProps as MuiSelectProps,
} from '@mui/material';
import { InputLabelProps } from '@mui/material/InputLabel';

export type SelectProps = MuiSelectProps & {
  formControlProps: FormControlProps;
  inputLableProps: InputLabelProps;
  menuItemsList: MenuItemProps[];
};
