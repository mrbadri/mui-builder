import { Dispatch } from "react";
import { Column } from "@tanstack/react-table";
import { TableProps } from "../../../table.types";

export interface AvailableColumnsProps {
    visibleColumns: Column<unknown>[];
    allColumns: TableProps['columns'];
    visibleCols: Record<string, boolean>;
    setVisibleCols: Dispatch<React.SetStateAction<Record<string, boolean>>>;
}