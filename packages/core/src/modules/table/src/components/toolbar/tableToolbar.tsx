import {
  IconBaselineDensityLarge,
  IconBaselineDensityMedium,
  IconLayoutList,
  IconLayoutRows,
  IconPrinter,
  IconSettings,
} from '@tabler/icons-react';

import { FC, useState } from 'react';

import { Box, Button, ButtonGroup, IconButton, useTheme } from '@mui/material';

import { TableToolbarProps } from './tableToolbar.types';

import ManageColumnsModal from './manageColumnsModal/manageColumnsModal';
import styles from './tableToolbar.styles';

const TableToolbar: FC<TableToolbarProps> = ({
  isDense,
  setIsDense,
  allColumns,
  table,
  tableId,
}) => {
  const theme = useTheme();
  const [openSettings, setOpenSettings] = useState(false);

  const handleModalSettings = () => {
    setOpenSettings((prev) => !prev);
  };

  return (
    <Box sx={styles.toolbarContainerSx()}>
      <Box className="start">
        <ButtonGroup
          variant="outlined"
          sx={styles.toolbarButtonGroupSx({ theme })}
        >
          <IconButton onClick={() => setIsDense(false)}>
            {/* <IconLayoutList /> */}
            <IconBaselineDensityLarge />
          </IconButton>
          <IconButton onClick={() => setIsDense(true)}>
            {/* <IconLayoutRows /> */}
            <IconBaselineDensityMedium />
          </IconButton>
        </ButtonGroup>
      </Box>
      <Box className="end">
        <Button
          variant="outlined"
          startIcon={<IconPrinter />}
          sx={styles.buttonSx({ theme })}
        >
          خروجی
        </Button>
        <Button
          variant="outlined"
          startIcon={<IconSettings />}
          sx={styles.buttonSx({ theme })}
          onClick={handleModalSettings}
        >
          مدیریت ستون‌ها
        </Button>
        <ManageColumnsModal
          openSettings={openSettings}
          handleModalSettings={handleModalSettings}
          allColumns={allColumns}
          table={table}
          tableId={tableId}
        />
      </Box>
    </Box>
  );
};
export default TableToolbar;
