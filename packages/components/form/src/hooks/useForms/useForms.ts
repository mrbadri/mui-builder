import { FieldValues, UseFormReturn } from 'react-hook-form';
import { create } from 'zustand';

export type Form = UseFormReturn<FieldValues, any, undefined>;

export type UseFormsState = {
  forms: Record<string, Form>;
  setForm: (id: string, form: Form) => void;
};

const useForms = create<UseFormsState>((set) => ({
  forms: {},

  //TODO: it's better to use immer
  setForm: (id, form) =>
    set((state) => ({ ...state, forms: { ...state.forms, [id]: form } })),
}));

export default useForms;
