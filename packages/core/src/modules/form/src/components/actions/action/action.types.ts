import { ReactNode } from 'react';

import { LoadingButtonProps } from '@mui/lab';

export type ActionProps = Omit<LoadingButtonProps, 'children'> & {
  childs: ReactNode;
  onAction?: string;
};
