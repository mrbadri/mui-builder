import { FieldValues } from 'react-hook-form';
import { Form } from '../../../hooks/useForms/useForms';
import { FormId } from '../../../types/public.types';
import { ActionBaseProps } from '../base/actionBase.types';

export type ActionSubmitFieldProps = ActionBaseProps & FormId ;

export type DynamicAction = (
    formMethods: Form,
    forms: Record<string, Form>,
    formId: string,
    Value: FieldValues
  ) => void;