import { FC, Fragment, Suspense, lazy } from 'react';
import {
  FormTypes,
  FieldProps,
} from 'packages/components/form/src/types/public.types';
import { GROUP_TYPE } from '../../components/builder/builder.types';

export interface SelectorProps {
  groupType: GROUP_TYPE;
  fieldType: FormTypes;
  fieldProps: FieldProps;
}

const Selector: FC<SelectorProps> = ({ groupType, fieldType, fieldProps }) => {
  let SelectedComponent;

  switch (groupType) {
    case 'form':
      SelectedComponent = lazy(() => import('@mui-builder/form'));

      return (
        <Suspense fallback={<div>Loading...</div>}>
          <SelectedComponent fieldType={fieldType} fieldProps={fieldProps} />
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
