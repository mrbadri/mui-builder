import { FieldValues, UseFormReturn } from 'react-hook-form';

export type Form = UseFormReturn<FieldValues, any, undefined>;

export type UseFormsState = {
  forms: Record<string, Form>;
  setForm: (id: string, form: Form) => void;
};
