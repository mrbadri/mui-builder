import { FC, Fragment, memo } from 'react';
import { flexRender } from '@tanstack/react-table';
import { TableBody, TableCell, TableRow } from '@mui/material';
import { TableBodyProps } from './tableBody.types';
import styles from '../tableContent.styles';

const TableBodyComponent: FC<TableBodyProps> = ({
  table,
  renderSubComponent,
}) => {
  return (
    <TableBody>
      {table.getRowModel().rows.map((row) => (
        <Fragment key={row.id}>
          <TableRow key={row.id} selected={row.getIsSelected()}>
            {row.getVisibleCells().map((cell) => (
              <TableCell
                key={cell.id}
                sortDirection={cell.column.getAutoSortDir()}
                sx={styles.tableCellSx({
                  width: cell.column.getSize().toString(),
                  padding: ['expander', 'select'].some(
                    (item) => item === cell.column.id
                  )
                    ? '0px'
                    : 'auto',
                })}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
          {row.getIsExpanded() && (
            <TableRow key={row.id}>
              <TableCell
                sx={{ padding: 0 }}
                colSpan={row.getVisibleCells().length}
              >
                {renderSubComponent?.({ row })}
              </TableCell>
            </TableRow>
          )}
        </Fragment>
      ))}
    </TableBody>
  );
};
export default memo(TableBodyComponent);
