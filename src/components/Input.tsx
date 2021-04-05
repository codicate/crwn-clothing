import styles from 'components/Input.module.scss';

const Input = ({
  required = false,
  name,
  type = 'text',
  label = '',
  value = '',
  changeHandler = () => { }
}: {
  required?: boolean;
  name: string;
  type?: string;
  label?: string;
  value: string;
  changeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div>
      <input
        className={styles.input}
        onChange={changeHandler}
      />
    </div>
  );
};

export default Input;
