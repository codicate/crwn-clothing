import styles from 'components/Button.module.scss';

const Button = ({ children = '', color, ...props }: {
  children?: React.ReactNode;
  color?: string;
  type?: 'submit' | 'reset' | 'button';
}) => {
  return (
    <button
      style={
        color ? { backgroundColor: color } : {}
      }
      className={styles.button}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
