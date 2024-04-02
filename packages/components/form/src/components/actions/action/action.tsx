import { FC } from 'react';

import { LoadingButton } from '@mui/lab';

import { ActionProps } from './action.types';

const Action: FC<ActionProps> = ({ children, ...actionProps }) => {
  return <LoadingButton {...actionProps}>{children}</LoadingButton>;
};

export default Action;
