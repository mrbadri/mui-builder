import { TableProps } from "../../../table.types";

export interface DraggableColumnBoxProps {
    allColumns: TableProps['columns'];
    column: TableProps['columns'][number];
    setVisibleCols: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
}