import { FC, Fragment, Suspense, lazy } from 'react';

import { SubmitFieldProps } from '../../components/actions/submit/submit.types';
import { TextProps } from '../../components/fields/text/text.types';
import { SelectorProps } from './selector.types';

import SubmitLoading from '../../components/actions/submit/submit.loading';
import TextLoading from '../../components/fields/text/text.loading';

const Selector: FC<SelectorProps> = ({ type, props, fieldId, configs }) => {
  let SelectedComponent;
  const { loading } = configs || {};

  switch (type) {
    case 'field-text':
      SelectedComponent = lazy(
        () => import('../../components/fields/text/text')
      );

      return (
        <Suspense key={fieldId} fallback={<TextLoading {...loading} />}>
          <SelectedComponent {...(props as TextProps)} />
        </Suspense>
      );

    case 'action-submit':
      SelectedComponent = lazy(
        () => import('../../components/actions/submit/submit')
      );

      return (
        <Suspense key={fieldId} fallback={<SubmitLoading {...loading} />}>
          <SelectedComponent {...(props as SubmitFieldProps)} />
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
