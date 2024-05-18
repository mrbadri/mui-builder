import { ReactNode } from 'react';

import { TabProps as TabPropsMui } from '@mui/material';

export type TabData = {
  label: string;
  chidlren: ReactNode;
};

export type TabProps = TabPropsMui & {
  tab: TabData;
  index: number;
  setTabs: React.Dispatch<React.SetStateAction<TabData[]>>;
  tabs: TabData[];
  value: number | null;
  setValue: React.Dispatch<React.SetStateAction<number | null>>;
};

export type TabsProps = {
  tabs: TabData[];
  setTabs: React.Dispatch<React.SetStateAction<TabData[]>>;
  onAdd?: () => void;
  addable?: boolean;
  AddIcon?: ReactNode;
  DeleteIcon?: ReactNode;
};
