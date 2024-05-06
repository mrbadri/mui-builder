import { Table } from '@tanstack/react-table';
import { TableProps } from '../../table.types';

export interface TableBodyProps {
  table: Table<unknown>;
  renderSubComponent?: TableProps['renderSubComponent'];
}
