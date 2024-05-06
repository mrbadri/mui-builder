import { Table } from "@tanstack/react-table";
import { TableProps } from "../../table.types";

export interface ManageColumnsModalProps {
  openSettings: boolean;
  handleModalSettings: () => void;
  allColumns: TableProps['columns'];
  table: Table<unknown>;
  tableId: TableProps['tableId'];
}
