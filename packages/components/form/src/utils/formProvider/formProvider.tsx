import { FC } from 'react';
import { FieldValues, FormProvider, UseFormReturn } from 'react-hook-form';

export interface IFormProviderProps {
  useFormMethods: UseFormReturn<FieldValues, any, undefined>;
  children: JSX.Element;
  onSubmit: () => unknown;
  other: object;
}

const FormProviderWrapper: FC<IFormProviderProps> = ({
  useFormMethods,
  onSubmit,
  children,
  other,
}) => {
  return (
    <FormProvider {...useFormMethods}>
      <form onSubmit={onSubmit} {...other}>
        {children}
      </form>
    </FormProvider>
  );
};

export default FormProviderWrapper;
