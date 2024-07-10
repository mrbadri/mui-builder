import { FC } from 'react';

import { LoadingButton } from '@mui/lab';

import { ActionProps } from './action.types';

const Action: FC<ActionProps> = ({ childs, ...actionProps }) => {
  return <LoadingButton {...actionProps}>{childs}</LoadingButton>;
};

export default Action;
