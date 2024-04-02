import { FC, Fragment, Suspense, lazy } from 'react';

import { SubmitFieldProps } from '../../components/actions/submit/submit.types';
import { TextProps } from '../../components/fields/text/text.types';
import { SelectorProps } from './selector.types';

const Selector: FC<SelectorProps> = ({ fieldType, fieldProps }) => {
  let SelectedComponent;

  switch (fieldType) {
    case 'field-text':
      SelectedComponent = lazy(
        () => import('../../components/fields/text/text')
      );

      return (
        <Suspense fallback={<div>Loading...</div>}>
          <SelectedComponent {...(fieldProps as TextProps)} />
        </Suspense>
      );

    case 'action-submit':
      SelectedComponent = lazy(
        () => import('../../components/actions/submit/submit')
      );

      return (
        <Suspense fallback={<div>Loading...</div>}>
          <SelectedComponent {...(fieldProps as SubmitFieldProps)} />
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
