import { LoadingButtonProps } from '@mui/lab';
import { ReactNode } from 'react';

export type ActionBaseProps = LoadingButtonProps &  {
  children: ReactNode;
};
