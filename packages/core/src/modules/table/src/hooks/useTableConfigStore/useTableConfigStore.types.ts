export interface TableConfig {
  isDense: boolean;
  columnVisibility: Record<string, boolean>;
  columnOrder: string[];
  columnSizing: Record<string, number>;
}

export interface TableConfigs  {
  [key: string]: TableConfig;
}

export interface TableConfigStore  {
  addTableConfig: (id: string, config: TableConfig) => void;
  removeTableConfig: (id: string) => void;
  updateTableConfig: (id: string, config: TableConfig) => void;
  configs: TableConfigs;
}

