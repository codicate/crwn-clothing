import styles from 'components/Input.module.scss';

const Input = ({
  changeHandler = () => { },
  label,
  ...props
}: {
  changeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  label?: string;
  type?: string,
  value?: string;
  required?: boolean;
}) => {
  return (
    <div className={styles.group}>
      <input
        className={styles.input}
        onChange={changeHandler}
        {...props}
      />
      {label && (
        <label
          className={`${props.value ? styles.shrink : ''}`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Input;
