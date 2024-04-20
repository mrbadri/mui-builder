export type SetProps = (id: string, props: any) => void;

export type UseControllerState = {
  propsController: Record<string, any>;
  setProps: SetProps;
  resetProps: () => void;
};
