import { ReactNode } from 'react';

import { LoadingButtonProps } from '@mui/lab';

export type ActionProps = LoadingButtonProps & {
  children: ReactNode;
  onAction?: string;
};
