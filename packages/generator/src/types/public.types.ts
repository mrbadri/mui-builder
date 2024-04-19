import { FormBuilderProps } from '@mui-builder/core';
import { Configs } from '@mui-builder/form';

export type GeneratorProps<T, C = FormBuilderProps | FormBuilderProps[]> = {
  children?: C;
  props?: T;
  configs?: Configs;
};
export type Generator<T, C = FormBuilderProps | FormBuilderProps[]> = (
  props: GeneratorProps<T, C>
) => FormBuilderProps;
