import { Table } from '@tanstack/react-table';

import { Dispatch, SetStateAction } from 'react';

import { TableProps } from '../table.types';

export interface TableToolbarProps {
  isDense: boolean;
  setIsDense: Dispatch<SetStateAction<boolean>>;
  allColumns: TableProps['columns'];
  table: Table<unknown>;
  tableId: TableProps['tableId'];
}
