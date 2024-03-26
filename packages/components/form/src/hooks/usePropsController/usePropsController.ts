import { create } from 'zustand';

export type SetProps = (id: string, props: any) => void;

export type UseControllerState = {
  propsController: Record<string, any>;
  setProps: (id: string, props: any) => void;
};

const usePropsController = create<UseControllerState>((set) => ({
  propsController: {},

  setProps: (id, props) => {
    console.log('props:', props);
    return set((state) => ({
      ...state,
      propsController: { ...state.propsController, [id]: props },
    }));
  },
}));

export default usePropsController;
