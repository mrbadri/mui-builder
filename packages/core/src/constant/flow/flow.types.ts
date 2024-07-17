import { FieldProps, FormTypes } from '@mui-builder/form';
import { GridProps, GridTypes } from '@mui-builder/grid';

export type Flow =
  | Record<'form', Record<FormTypes, FieldProps>>
  | Record<'grid', Record<GridTypes, GridProps>>;
