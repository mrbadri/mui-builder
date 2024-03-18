import { FC } from 'react';
import Action from '../action/action';
import { SubmitFieldProps } from './submit.types';
import useSubmit from './useSubmit';

const Submit: FC<SubmitFieldProps> = (props) => {
  const { children, getActionProps } = useSubmit(props);

  return <Action {...getActionProps()}>{children}</Action>;
};

export default Submit;
