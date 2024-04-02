import { FC } from 'react';

import { SubmitFieldProps } from './submit.types';

import Action from '../action/action';
import useSubmit from './useSubmit';

const Submit: FC<SubmitFieldProps> = (props) => {
  const { children, getActionProps } = useSubmit(props);

  return <Action {...getActionProps()}>{children}</Action>;
};

export default Submit;
