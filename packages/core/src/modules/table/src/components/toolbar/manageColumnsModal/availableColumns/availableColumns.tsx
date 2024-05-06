import { FC, useEffect, useState } from 'react';
import { Box, Checkbox, FormControlLabel, FormGroup, TextField, Typography, useTheme } from '@mui/material';
import { IconSearch } from '@tabler/icons-react';
import styles from '../manageColumnsModal.styles';
import { AvailableColumnsProps } from './availableColumns.types';
import { Column } from '@tanstack/react-table';

const AvailableColumns: FC<AvailableColumnsProps> = ({
  visibleColumns,
  allColumns,
  visibleCols,
  setVisibleCols
}) => {
  const theme = useTheme();
  
  const [existingColsSearch, setExistingColsSearch] = useState('');

  useEffect(() => {
    return () => {
      setExistingColsSearch('');
    };
  }, []);

  return (
    <Box flex={1} paddingX="16px">
      <Typography fontSize="16px" fontWeight={500} color={theme.palette.grey[900]}>
        ستون‌های موجود
      </Typography>
      <TextField
        value={existingColsSearch}
        onChange={(e) => setExistingColsSearch(e.target.value)}
        placeholder="جستجو در ستون‌های موجود"
        InputProps={{ startAdornment: <IconSearch color={theme.palette.grey[500]} style={styles.searchInputElementSx()} /> }}
        fullWidth
        sx={styles.searchInputSx({ theme })}
      />
      <FormGroup sx={styles.visibleColumnsContainerSx()}>
        {visibleColumns
          .filter((item: Column<unknown>) => item.getCanHide() && item.columnDef.header?.toString().includes(existingColsSearch))
          .sort((a: Column<unknown>, b: Column<unknown>) => {
            if ((a?.columnDef?.header as string) < (b?.columnDef?.header as string)) return -1;
            if ((a?.columnDef?.header as string) > (b?.columnDef?.header as string)) return 1;
            return 0;
          })
          .map((column: Column<unknown>) => (
            <FormControlLabel
              key={column.id}
              id={column.id}
              name={column.id}
              value={column.id}
              label={
                <Typography fontSize="12px" fontWeight={500} color={theme.palette.grey[900]}>
                  {allColumns.find((item) => item.id === column.id)?.header as string}
                </Typography>
              }
              control={
                <Checkbox
                  checked={visibleCols[column.id]}
                  disableRipple
                  disableFocusRipple
                  disableTouchRipple
                  icon={<Box borderRadius="6px" width={24} height={24} bgcolor={theme.palette.grey[100]} />}
                  checkedIcon={
                    <Box sx={styles.checkboxCheckedIconSx({ theme })}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9" fill="none">
                        <path
                          d="M2 4.5L4.5 7L9.5 2"
                          stroke={theme.palette.primary.main}
                          strokeWidth="2.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Box>
                  }
                />
              }
              onChange={(e: any, checked) => {
                setVisibleCols((prev) => ({ ...prev, [e.target.value]: checked }));
              }}
            />
          ))}
      </FormGroup>
    </Box>
  );
};
export default AvailableColumns;
