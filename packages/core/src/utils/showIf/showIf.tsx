import { ShowIfProps } from './showIf.types';

const ShowIf = ({ children, show }: ShowIfProps) => {
  if (!show) return null;

  return children;
};

export default ShowIf;
