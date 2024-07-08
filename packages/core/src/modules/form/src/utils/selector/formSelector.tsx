import { FC, Fragment, Suspense, lazy } from 'react';

import { SubmitFieldProps } from '../../components/actions/submit/submit.types';
import { AutoCompleteProps } from '../../components/fields/autoComplete/autoComplete.types';
import { CheckboxProps } from '../../components/fields/checkbox/checkbox.types';
import { PasswordProps } from '../../components/fields/password/password.types';
import { SelectProps } from '../../components/fields/select/select.types';
import { TextProps } from '../../components/fields/text/text.types';
import { Option } from '../../types/public.types';
import { FormSelectorProps } from './formSelector.types';

import SubmitLoading from '../../components/actions/submit/submit.loading';
import PasswordLoading from '../../components/fields/password/password.loading';
import TextLoading from '../../components/fields/text/text.loading';

const FormSelector: FC<FormSelectorProps> = ({
  fieldType,
  fieldProps,
  configs,
}) => {
  let SelectedComponent;
  const { loading } = configs || {};

  switch (fieldType) {
    case 'field-text':
      SelectedComponent = lazy(
        () => import('../../components/fields/text/text')
      );

      return (
        <Suspense key={fieldProps.id} fallback={<TextLoading {...loading} />}>
          <SelectedComponent {...(fieldProps as TextProps)} />
        </Suspense>
      );

    case 'action-submit':
      SelectedComponent = lazy(
        () => import('../../components/actions/submit/submit')
      );

      return (
        <Suspense key={fieldProps.id} fallback={<SubmitLoading {...loading} />}>
          <SelectedComponent {...(fieldProps as SubmitFieldProps)} />
        </Suspense>
      );

    case 'auto-complete':
      SelectedComponent = lazy(
        () => import('../../components/fields/autoComplete/autoComplete')
      );

      return (
        <Suspense key={fieldProps.id} fallback={<SubmitLoading {...loading} />}>
          <SelectedComponent {...(fieldProps as AutoCompleteProps<Option>)} />
        </Suspense>
      );

    case 'checkbox':
      SelectedComponent = lazy(
        () => import('../../components/fields/checkbox/checkbox')
      );

      return (
        <Suspense key={fieldProps.id} fallback={<SubmitLoading {...loading} />}>
          <SelectedComponent {...(fieldProps as CheckboxProps)} />
        </Suspense>
      );

    case 'password':
      SelectedComponent = lazy(
        () => import('../../components/fields/password/password')
      );

      return (
        <Suspense
          key={fieldProps.id}
          fallback={<PasswordLoading {...loading} />}
        >
          <SelectedComponent {...(fieldProps as PasswordProps)} />
        </Suspense>
      );

    case 'select':
      SelectedComponent = lazy(
        () => import('../../components/fields/select/select')
      );

      return (
        <Suspense key={fieldProps.id} fallback={'...loading'}>
          <SelectedComponent {...(fieldProps as SelectProps)} />
        </Suspense>
      );

    default:
      SelectedComponent = Fragment;

      return (
        <Suspense fallback={<div>Loading...</div>}>
          <SelectedComponent />
        </Suspense>
      );
  }
};
export default FormSelector;
