import { create } from 'zustand';
import { UseFormsState } from './useForms.types';



const useForms = create<UseFormsState>((set) => ({
  forms: {},

  //TODO: it's better to use immer
  setForm: (id, form) =>
    set((state) => ({ ...state, forms: { ...state.forms, [id]: form } })),
}));

export default useForms;
