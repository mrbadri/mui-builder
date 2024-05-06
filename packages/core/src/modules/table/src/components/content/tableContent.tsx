import { FC } from 'react';
import { Table, TableContainer } from '@mui/material';
import { TableContentProps } from './tableContent.types';
import TableBody from './tableBody/tableBody';
import styles from './tableContent.styles';
import TableHead from './tableHead/tableHead';

const TableContent: FC<TableContentProps> = ({
  table,
  isDense,
  renderSubComponent,
}) => {
  return (
    <TableContainer sx={styles.tableContainerSx()}>
      <Table
        stickyHeader
        size={isDense ? 'small' : 'medium'}
        sx={styles.tableSx({ width: table.getCenterTotalSize() })}
      >
        <TableHead table={table} />
        <TableBody table={table} renderSubComponent={renderSubComponent} />
      </Table>
    </TableContainer>
  );
};

export default TableContent;
