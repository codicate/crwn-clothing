import styles from 'pages/Account/Account.module.scss';

import Form from 'components/Form';
import Button from 'components/Button';

const SignUp = () => {
  const defaultInput = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  const [input, setInput] = useState(defaultInput);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    setInput(defaultInput);
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;

    setInput({
      ...input,
      [name]: value
    });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        I already have an account
      </h2>
      <span className={styles.title}>
        Sign in with your email and password
      </span>
      <form onSubmit={submitHandler}>
        <Input
          required
          type='text'
          name='displayName'
          label='Display Name'
          value={input.displayName}
          changeHandler={changeHandler}
        />
        <Input
          required
          type='email'
          name='email'
          label='email'
          value={input.email}
          changeHandler={changeHandler}
        />
        <Input
          required
          type='password'
          name='password'
          label='password'
          value={input.password}
          changeHandler={changeHandler}
        />
        <Input
          required
          type='password'
          name='confirmPassword'
          label='Confirm Password'
          value={input.confirmPassword}
          changeHandler={changeHandler}
        />
        <Button
          type='submit'
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUp;