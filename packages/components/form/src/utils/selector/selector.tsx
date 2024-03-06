import { FC, Fragment, Suspense, lazy } from 'react';
import { TextProps } from '../../components/text/text.types';
import { SelectorProps } from './selector.types';
import Text from '../../components/text/text';

const Selector: FC<SelectorProps> = ({ fieldType, fieldProps }) => {
  let SelectedComponent;

  switch (fieldType) {
    case 'text':
      SelectedComponent = lazy(() => import('../../components/text/text'));

      return (
        <Suspense fallback={<div>Loading...</div>}>
          <Text {...(fieldProps as TextProps)} />
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
