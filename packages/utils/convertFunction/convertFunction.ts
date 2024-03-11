import { TConvertFunctionProps } from './convertFunction.types';

const convertFunction = (fn: TConvertFunctionProps, ...props: string[]) => {
  if (!fn)
    return () => {
      return {};
    };

  if (typeof fn === 'function') return fn;

  return new Function(...props, fn);
};

export default convertFunction;
