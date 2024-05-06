import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { TableConfigStore, TableConfig } from './useTableConfigStore.types';


const useTableConfigStore = create<TableConfigStore, [['zustand/persist', unknown]]>(
  persist(
    (set, get) => ({
      configs: {},
      addTableConfig: (id: string, config: TableConfig) =>
        set({
          configs: {
            [id]: config
          }
        }),
      removeTableConfig: (id: string) => {
        const tempObj = get();
        delete tempObj?.configs?.[id];
        return set(tempObj);
      },
      updateTableConfig: (id: string, config: TableConfig) => {
        const tempObj = get();
        tempObj.configs[id] = config;
        return set(tempObj);
      }
    }),
    {
      name: 'table-configs-storage'
    }
  )
);
export default useTableConfigStore;
