import { TConvertFunctionProps } from './convertFunction.types';

const convertFunction = <T = unknown>(
  fn: TConvertFunctionProps,
  ...props: string[]
): T => {
  if (!fn)
    return (() => {
      return {};
    }) as T;

  if (typeof fn === 'function') return fn as T;

  // eslint-disable-next-line no-new-func
  return new Function(...props, fn) as T;
};

export default convertFunction;
