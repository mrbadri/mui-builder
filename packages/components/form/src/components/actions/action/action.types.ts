import { LoadingButtonProps } from '@mui/lab';
import { ReactNode } from 'react';

export type ActionProps = LoadingButtonProps & {
  children: ReactNode;
  onAction?: string;
};
