import { ShowIf } from './showIf.types';

const ShowIf = ({ children, show }: ShowIf) => {
  if (!show) return null;
  
  return children;
};

export default ShowIf;
