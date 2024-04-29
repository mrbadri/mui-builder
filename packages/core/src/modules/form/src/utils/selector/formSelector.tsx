import { FC, Fragment, Suspense, lazy } from 'react';

import { SubmitFieldProps } from '../../components/actions/submit/submit.types';
import { RadioGroupProps } from '../../components/fields/radio/radio.types';
import { TextProps } from '../../components/fields/text/text.types';
import { FormSelectorProps } from './formSelector.types';

import SubmitLoading from '../../components/actions/submit/submit.loading';
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

    case 'radio':
      SelectedComponent = lazy(
        () => import('../../components/fields/radio/radioGroup')
      );

      return (
        <Suspense key={fieldProps.id} fallback={<SubmitLoading {...loading} />}>
          <SelectedComponent {...(fieldProps as RadioGroupProps)} />
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
