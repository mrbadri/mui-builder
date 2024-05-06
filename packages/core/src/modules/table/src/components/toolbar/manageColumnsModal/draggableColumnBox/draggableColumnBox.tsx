import { FC } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { IconX } from '@tabler/icons-react';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { DraggableColumnBoxProps } from './draggableColumnBox.types';
import styles from '../manageColumnsModal.styles';

const DraggableColumnBox: FC<DraggableColumnBoxProps> = ({
  allColumns,
  column,
  setVisibleCols,
}) => {
  const theme = useTheme();

  const { attributes, isDragging, listeners, setNodeRef, transform } =
    useSortable({
      id: column.id as string,
    });

  return (
    <Box
      key={column.id}
      sx={styles.draggableBoxSx({
        theme,
        isDragging,
        transform: CSS.Translate.toString(transform),
      })}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      <Typography
        color={theme.palette.grey[600]}
        fontSize="14px"
        fontWeight={500}
        lineHeight="20px"
      >
        {allColumns.find((item) => item?.id === column?.id)?.header as string}
      </Typography>
      <IconButton
        onClick={() =>
          setVisibleCols((prev) => ({ ...prev, [column.id as string]: false }))
        }
      >
        <IconX size={1.4} stroke={theme.palette.grey[600]} />
      </IconButton>
    </Box>
  );
};

export default DraggableColumnBox;
