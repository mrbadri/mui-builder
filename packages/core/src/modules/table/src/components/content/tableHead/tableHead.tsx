import { FC } from 'react';
import { Box, Stack, TableCell, TableHead as TableHeadMui, TableRow, useTheme } from '@mui/material';
import { Header, flexRender } from '@tanstack/react-table';
import styles from '../tableContent.styles';
import FilterColumn from './filterColumn/filterColumn';
import { IconCaretDownFilled, IconCaretUpFilled } from '@tabler/icons-react';
import { TableHeadProps } from './tableHead.types';

const TableHead: FC<TableHeadProps> = ({ table } ) => {
  const theme = useTheme();

  return (
    <TableHeadMui>
      <TableRow>
        {table.getFlatHeaders().map((header: Header<unknown, unknown>) => (
          <TableCell
            key={header.id}
            colSpan={header.colSpan}
            sx={styles.tableCellSx({
              width: header.getSize(),
              padding: ['expander', 'select'].some((item) => item === header.id) ? '0px' : 'none'
            })}
            sortDirection={header.column.getAutoSortDir()}
          >
            {header.isPlaceholder ? null : header.column.getCanSort() ? (
              <Stack direction="row" gap="4px" sx={styles.headerPlaceholderSx()} onClick={header.column.getToggleSortingHandler()}>
                <Stack spacing="-3px" mt={0.3}>
                  <IconCaretUpFilled />
                  <IconCaretDownFilled />
                </Stack>
                {flexRender(header.column.columnDef.header, header.getContext())}
              </Stack>
            ) : (
              flexRender(header.column.columnDef.header, header.getContext())
            )}
            {header.column.getCanFilter() ? <FilterColumn id={header.id} /> : null}
            {header.column.getCanResize() && (
              <Box
                {...{
                  onDoubleClick: () => header.column.resetSize(),
                  onMouseDown: header.getResizeHandler(),
                  onTouchStart: header.getResizeHandler(),
                  className: 'resizer',
                  sx: { ...styles.resizeBoxSx({ theme }) }
                }}
              />
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHeadMui>
  );
};
export default TableHead;
