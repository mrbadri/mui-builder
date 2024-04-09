import { FC, Fragment, Suspense, lazy } from 'react';

import { SubmitFieldProps } from '../../components/actions/submit/submit.types';
import { TextProps } from '../../components/fields/text/text.types';
import { SelectorProps } from './selector.types';

import SubmitLoading from '../../components/actions/submit/submit.loading';
import TextLoading from '../../components/fields/text/text.loading';

const Selector: FC<SelectorProps> = ({ fieldType, fieldProps, fieldId }) => {
  let SelectedComponent;

  switch (fieldType) {
    case 'field-text':
      SelectedComponent = lazy(
        () => import('../../components/fields/text/text')
      );

      return (
        <Suspense
          key={fieldId}
          fallback={<TextLoading {...(fieldProps as TextProps)?.loadingProps} />}
        >
          {/* <SelectedComponent {...(fieldProps as TextProps)} /> */}
          <TextLoading {...(fieldProps as TextProps)?.loadingProps} />
        </Suspense>
      );

    case 'action-submit':
      SelectedComponent = lazy(
        () => import('../../components/actions/submit/submit')
      );

      return (
        <Suspense
          key={fieldId}
          fallback={
            <SubmitLoading {...(fieldProps as SubmitFieldProps)?.loadingProps} />
          }
        >
          {/* <SelectedComponent {...(fieldProps as SubmitFieldProps)} /> */}
          <SubmitLoading {...(fieldProps as SubmitFieldProps)?.loadingProps} />
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
