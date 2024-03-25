const isStrFn = <T = unknown>(fn?: string | T): boolean => {
  if (typeof fn === 'string') return fn?.includes('return');
  return false;
};

export default isStrFn;
