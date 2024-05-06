import { Column } from '@tanstack/react-table';

import { Dispatch, SetStateAction } from 'react';
import { TableProps } from '../../../table.types';

export interface SelectedColumnsProps {
  allColumns: TableProps['columns'];
  visibleColumns: Column<unknown>[];
  visibleCols: Record<string, boolean>;
  orderedCols: string[];
  setVisibleCols: Dispatch<SetStateAction<Record<string, boolean>>>;
  setOrderedCols: Dispatch<SetStateAction<string[]>>;
}
