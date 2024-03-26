import { create } from 'zustand';

export type UseControllerState = {
  controller: Record<string, any>;
  setController: (id: string, props: any) => void;
};

const usePropsController = create<UseControllerState>((set) => ({
  controller: {},

  setController: (id, props) =>
    set((state) => ({
      ...state,
      controller: { ...state.controller, [id]: props },
    })),
}));

export default usePropsController;
