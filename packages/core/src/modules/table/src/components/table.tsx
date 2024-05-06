import {
  SortingState,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { useEffect, useMemo, useState } from 'react';

import { Box } from '@mui/material';

import { TableProps } from './table.types';

import useTableConfigStore from '../hooks/useTableConfigStore/useTableConfigStore';
import TableToolbar from './toolbar/tableToolbar';
import TableContent from './content/tableContent';
import TablePagination from './pagination/tablePagination';

const Table = ({
  tableId,
  columns,
  data,
  renderSubComponent,
  tableOptions,
}: TableProps) => {
  const { configs, updateTableConfig } = useTableConfigStore();
  const [columnSizing, setColumnSizing] = useState(
    configs?.[tableId]?.columnSizing ||
      columns.reduce((a, v) => ({ ...a, [v.id as string]: v?.size }), {})
  );

  const allColumns = useMemo<TableProps['columns']>(
    () => [
      ...columns.map((item) => ({
        ...item,
        size: columnSizing[item.id as string] || item.size,
      })),
    ],
    [columnSizing, columns]
  );
  const [isDense, setIsDense] = useState(configs?.[tableId]?.isDense || false);

  const table = useReactTable({
    data,
    columns: allColumns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      columnOrder:
        configs?.[tableId]?.columnOrder ||
        (allColumns.map((c) => c.id) as string[]),
      columnVisibility: configs?.[tableId]?.columnVisibility || {},
      sorting: [] as SortingState,
      rowSelection: {},
    },
    state: {
      columnSizing,
    },
    onColumnSizingChange: setColumnSizing,
    getSortedRowModel: getSortedRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    columnResizeMode: 'onChange',
    columnResizeDirection: 'rtl',
    ...tableOptions,
  });

  useEffect(() => {
    updateTableConfig(tableId, {
      isDense,
      columnVisibility: table.getState().columnVisibility,
      columnOrder: table.getState().columnOrder,
      columnSizing,
    });
  }, [allColumns, columnSizing, isDense, table, tableId, updateTableConfig]);

  return (
    <Box>
      <TableToolbar
        isDense={isDense}
        setIsDense={setIsDense}
        allColumns={allColumns}
        table={table}
        tableId={tableId}
      />
      <TableContent table={table} isDense={isDense} renderSubComponent={renderSubComponent} />
      <TablePagination table={table} />
    </Box>
  );
};

export default Table;
