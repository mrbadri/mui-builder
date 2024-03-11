import { LoadingButton } from '@mui/lab';
import { FC } from 'react';
import { ActionBaseProps } from './actionBase.types';

const ActionBase: FC<ActionBaseProps> = ({ children, ...actionBaseProps }) => {
  return <LoadingButton {...actionBaseProps}>{children}</LoadingButton>;
};

export default ActionBase;
