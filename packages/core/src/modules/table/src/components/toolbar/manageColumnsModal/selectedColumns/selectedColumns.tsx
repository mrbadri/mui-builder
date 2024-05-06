import { FC, useEffect, useState } from 'react';
import { Box, Stack, TextField, Typography, useTheme } from '@mui/material';
import { DndContext, DragEndEvent, MouseSensor, TouchSensor, closestCenter, useSensor, useSensors } from '@dnd-kit/core';
import { restrictToFirstScrollableAncestor, restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { SortableContext, arrayMove, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { IconSearch } from '@tabler/icons-react';
import styles from '../manageColumnsModal.styles';
import { SelectedColumnsProps } from './selectedColumns.types';
import { TableProps } from '../../../table.types';
import DraggableColumnBox from '../draggableColumnBox/draggableColumnBox';

const SelectedColumns: FC<SelectedColumnsProps> = ({
  allColumns, 
  visibleColumns,
  visibleCols,
  orderedCols,
  setVisibleCols,
  setOrderedCols
}) => {
  const theme = useTheme();
  const [selectedColsSearch, setSelectedColsSearch] = useState('');

  useEffect(() => {
    return () => {
      setSelectedColsSearch('');
    };
  }, []);

  const existingColsLength = orderedCols
    .map((item: string) => visibleColumns.find((column) => column.id === item))
    .filter(
      (item) => item?.getCanHide() && visibleCols[item?.id] && item?.columnDef.header?.toString().includes(selectedColsSearch)
    ).length;

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 8
      }
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 200,
        tolerance: 6
      }
    })
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (active && over && active.id !== over.id) {
      setOrderedCols((columnOrder: string[]) => {
        const oldIndex = columnOrder.indexOf(active.id as string);
        const newIndex = columnOrder.indexOf(over.id as string);
        return arrayMove(columnOrder, oldIndex, newIndex); //this is just a splice util
      });
    }
  }
  
  return (
    <Box flex={1} paddingX="16px">
      <Stack spacing="8px" direction="row" alignItems="center">
        <Typography fontSize="16px" fontWeight={500} color={theme.palette.grey[900]}>
          ستون‌های انتخاب شده
        </Typography>
        <Box sx={styles.selectedColumnsSx({ theme })}>{existingColsLength >= 10 ? existingColsLength : `0${existingColsLength}`}</Box>
      </Stack>
      <TextField
        value={selectedColsSearch}
        onChange={(e) => setSelectedColsSearch(e.target.value)}
        placeholder="جستجو در ستون‌های انتخاب شده"
        InputProps={{ startAdornment: <IconSearch color={theme.palette.grey[500]} style={styles.searchInputElementSx()} /> }}
        fullWidth
        sx={styles.searchInputSx({ theme })}
      />
      <Stack spacing="16px" maxHeight="350px" overflow="auto" pr="10px">
        <DndContext
          collisionDetection={closestCenter}
          modifiers={[restrictToVerticalAxis, restrictToFirstScrollableAncestor]}
          onDragEnd={handleDragEnd}
          sensors={sensors}
        >
          {orderedCols
            .map((item: string) => visibleColumns.find((column) => column.id === item))
            .filter(
              (item) =>
                item?.getCanHide() && visibleCols[item?.id] && item?.columnDef.header?.toString().includes(selectedColsSearch)
            )
            .map((column) => (
              <SortableContext key={column?.id} items={orderedCols} strategy={verticalListSortingStrategy}>
                <DraggableColumnBox allColumns={allColumns} column={column as TableProps['columns'][number]} setVisibleCols={setVisibleCols} />
              </SortableContext>
            ))}
        </DndContext>
      </Stack>
    </Box>
  );
};
export default SelectedColumns;
