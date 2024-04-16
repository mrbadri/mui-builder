import { create } from 'zustand';

import { UseControllerState } from './usePropsController.types';

const usePropsController = create<UseControllerState>((set) => ({
  propsController: {},

  setProps: (id, props) => {
    return set((state) => {
      console.log('state:', state);

      return {
        ...state,
        propsController: { ...state.propsController, [id]: props },
      };
    });
  },

  resetProps: () => set((state) => ({ ...state, propsController: {} })),
}));

export default usePropsController;
