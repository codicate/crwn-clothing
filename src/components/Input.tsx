import styles from 'components/Input.module.scss';

const Input = ({
  label,
  changeHandler = () => { },
  ...props
}: {
  label?: string;
  changeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  name?: string;
  type?: string,
  value?: string;
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
