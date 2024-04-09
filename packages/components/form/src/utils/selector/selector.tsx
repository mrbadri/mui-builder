import { FC, Fragment, Suspense, lazy } from 'react';

import { SelectorProps } from './selector.types';

import SubmitLoading from '../../components/actions/submit/submit.loading';
import TextLoading from '../../components/fields/text/text.loading';

const Selector: FC<SelectorProps> = ({
  fieldType,
  fieldProps,
  fieldId,
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
        <Suspense key={fieldId} fallback={<TextLoading {...loading} />}>
          {/* <SelectedComponent {...(fieldProps as TextProps)} /> */}
          <TextLoading {...loading} />
        </Suspense>
      );

    case 'action-submit':
      SelectedComponent = lazy(
        () => import('../../components/actions/submit/submit')
      );

      return (
        <Suspense key={fieldId} fallback={<SubmitLoading {...loading} />}>
          {/* <SelectedComponent {...(fieldProps as SubmitFieldProps)} /> */}
          <SubmitLoading {...loading} />
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
export default Selector;
