import { FC, useRef } from 'react';
import { IconChevronLeft } from '@tabler/icons-react';
import {
  Button,
  MenuItem,
  Pagination,
  Select,
  Stack,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { TablePaginationProps } from './tablePagination.types';
import styles from './tablePagination.styles';

const TablePagination: FC<TablePaginationProps> = ({ table }) => {
  const theme = useTheme();
  const pageIndexInputRef = useRef<HTMLInputElement>();
  const { pageSize, pageIndex } = table.getState().pagination;
  const count = Math.ceil(table.getFilteredRowModel().rows.length / pageSize);

  return (
    <Stack
      position="relative"
      justifyContent="center"
      alignItems="center"
      mt="16px"
    >
      <Select
        value={pageSize}
        onChange={(e) => {
          table.setPageSize(parseInt(e.target.value.toString()));
        }}
        size="small"
        sx={styles.pageCountSelectSx()}
      >
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={15}>15</MenuItem>
        <MenuItem value={25}>25</MenuItem>
      </Select>
      <Pagination
        size="small"
        color="primary"
        count={count}
        page={pageIndex + 1}
        onChange={(_e, page) => {
          table.setPageIndex(page - 1);
        }}
      />
      <Stack
        spacing="8px"
        direction="row"
        alignItems="center"
        height="100%"
        position="absolute"
        right={0}
        top={0}
      >
        <Typography fontSize="12px" color={theme.palette.grey[600]}>
          رفتن به صفحه
        </Typography>
        <TextField
          size="small"
          inputRef={pageIndexInputRef}
          sx={styles.pageCountTextFieldSx()}
        />
        <Button
          variant="text"
          endIcon={<IconChevronLeft />}
          onClick={() => {
            table.setPageIndex(
              parseInt(pageIndexInputRef?.current?.value as string) - 1
            );
          }}
        >
          برو
        </Button>
      </Stack>
    </Stack>
  );
};
export default TablePagination;
