import { ColumnDef, Row, TableOptions } from '@tanstack/react-table';

import { ReactElement } from 'react';

export interface TableProps {
  tableId: string;
  columns: ColumnDef<unknown>[];
  data: unknown[];
  renderSubComponent?: (props: { row: Row<unknown> }) => ReactElement;
  tableOptions?: Partial<TableOptions<unknown>>;
}
