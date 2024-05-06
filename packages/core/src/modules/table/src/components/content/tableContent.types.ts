import { Table } from '@tanstack/react-table';
import { TableProps } from '../table.types';

export interface TableContentProps {
  table: Table<unknown>;
  isDense: boolean;
  renderSubComponent?: TableProps['renderSubComponent'];
}
