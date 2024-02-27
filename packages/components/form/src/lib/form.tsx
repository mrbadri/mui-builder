import styles from './form.module.scss';

/* eslint-disable-next-line */
export interface FormProps {}

export function Form(props: FormProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Form!</h1>
    </div>
  );
}

export default Form;
