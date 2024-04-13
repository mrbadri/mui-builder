import styles from './grid.module.scss';

/* eslint-disable-next-line */
export interface GridProps {}

export function Grid(props: GridProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Grid!</h1>
    </div>
  );
}

export default Grid;
