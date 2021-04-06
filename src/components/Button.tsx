import styles from 'components/Button.module.scss';

const Button = ({
  children = '',
  type = 'button',
  ...props
}: {
  children?: React.ReactNode;
  type?: 'submit' | 'reset' | 'button';
  onClick?: () => {};
}) => {
  return (
    <button
      className={styles.button}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
