import { FieldProps, FormTypes } from "packages/components/form/src/types/public.types";

export type GROUP_TYPE = 'form';

export type FormBuilderProps = {
  id: string;
  groupType: GROUP_TYPE;
  type: FormTypes;
  props: FieldProps;
};

export type BuilderProps = {
  groupList: FormBuilderProps[];
};