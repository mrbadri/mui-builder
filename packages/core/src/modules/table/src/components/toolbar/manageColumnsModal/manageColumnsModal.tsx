import { useEffect, useMemo, useState } from 'react';
import { IconCircleArrowLeft, IconX } from '@tabler/icons-react';
import {
  Box,
  Button,
  Dialog,
  Divider,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { ManageColumnsModalProps } from './manageColumnsModal.types';
import useTableConfigStore from '../../../hooks/useTableConfigStore/useTableConfigStore';
import AvailableColumns from './availableColumns/availableColumns';
import styles from './manageColumnsModal.styles';
import SelectedColumns from './selectedColumns/selectedColumns';

const ManageColumnsModal = ({
  openSettings,
  handleModalSettings,
  allColumns,
  table,
  tableId,
}: ManageColumnsModalProps) => {
  const theme = useTheme();
  const { removeTableConfig } = useTableConfigStore();

  const visibleColumns= useMemo(
    () => table.getVisibleLeafColumns(),
    [table]
  );

  const [orderedCols, setOrderedCols] = useState<string[]>([]);
  const [visibleCols, setVisibleCols] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (openSettings) {
      setOrderedCols(visibleColumns.map((item) => item.id));
      setVisibleCols(
        visibleColumns.reduce(
          (a, v) => ({ ...a, [v.id]: v.getIsVisible() }),
          {}
        )
      );
    }
  }, [openSettings, visibleColumns]);

  return (
    <Dialog
      open={openSettings}
      onClose={handleModalSettings}
      maxWidth="md"
      fullWidth
    >
      <Box padding="24px">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography
            fontSize="18px"
            fontWeight={500}
            position="relative"
            color={theme.palette.grey[900]}
          >
            مدیریت ستون‌ها
          </Typography>
          <IconButton onClick={handleModalSettings}>
            <IconX />
          </IconButton>
        </Stack>
        <Typography
          mt="8px"
          fontSize="14px"
          fontWeight={400}
          color={theme.palette.grey[500]}
        >
          ستون‌هایی که می‌خواهید در جدول نمایش داده شود را انتخاب کنید
        </Typography>
        <Divider sx={styles.dividerSx({ my: '16px' })} />
        <Stack direction="row">
          <AvailableColumns
            visibleColumns={visibleColumns}
            allColumns={allColumns}
            visibleCols={visibleCols}
            setVisibleCols={setVisibleCols}
          />
          <Box position="relative">
            <Divider
              orientation="vertical"
              sx={styles.dividerSx({ mx: '15px' })}
            />
            <IconCircleArrowLeft style={styles.arrowLeftIconSx()} />
          </Box>
          <SelectedColumns
            setOrderedCols={setOrderedCols}
            visibleColumns={visibleColumns}
            orderedCols={orderedCols}
            allColumns={allColumns}
            visibleCols={visibleCols}
            setVisibleCols={setVisibleCols}
          />
        </Stack>
        <Divider sx={styles.dividerSx({ my: '16px' })} />
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Stack direction="row" spacing="16px">
            <Button
              size="medium"
              variant="contained"
              color="secondary"
              sx={styles.saveButtonSx()}
              onClick={() => {
                table.setColumnVisibility(visibleCols);
                table.setColumnOrder(orderedCols);
                handleModalSettings();
              }}
            >
              ذخیره
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                handleModalSettings();
              }}
            >
              انصراف
            </Button>
          </Stack>
          <Button
            variant="text"
            sx={styles.resetButtonSx({ theme })}
            onClick={() => {
              removeTableConfig(tableId);
              table.resetColumnVisibility();
              table.resetColumnOrder();
              table.resetColumnSizing();
              handleModalSettings();
            }}
          >
            تنظیم مجدد حالت پیش فرض
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
};
export default ManageColumnsModal;
