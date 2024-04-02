import { create } from 'zustand';

import { UseControllerState } from './usePropsController.types';

const usePropsController = create<UseControllerState>((set) => ({
  propsController: {},

  setProps: (id, props) => {
    return set((state) => ({
      ...state,
      propsController: { ...state.propsController, [id]: props },
    }));
  },
}));

export default usePropsController;
