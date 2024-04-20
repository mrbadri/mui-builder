import {
  FieldPath,
  FieldPathValue,
  FieldValues,
  RegisterOptions,
  ValidateResult,
} from 'react-hook-form';

export type Validate = (
  value: FieldPathValue<FieldValues, FieldPath<FieldValues>>,
  formValues: FieldValues
) => ValidateResult | Promise<ValidateResult>;

export type MainRule =
  | Omit<
      RegisterOptions<FieldValues, string>,
      'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
    >
  | undefined;

export type Rule = Omit<MainRule, 'validate'> & {
  validate?: string | Validate;
};
