import styles from 'pages/Account/SignIn.module.scss';
import { FormEvent, useState } from 'react';

import { signInWithGoogle } from 'utils/firebase';
import Input from 'components/Input';
import Button from 'components/Button';

const SignIn = () => {
  const [input, setInput] = useState({
    email: '',
    password: ''
  });

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    console.log('submit');

    setInput({
      email: '',
      password: ''
    });
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;

    setInput({
      ...input,
      [name]: value
    });
  };

  return (
    <div className={styles.signIn}>
      <h2 className={styles.title}>
        I already have an account
      </h2>
      <span className={styles.title}>
        Sign in with your email and password
      </span>
      <form onSubmit={submitHandler}>
        <Input
          required
          name='email'
          type='email'
          label='email'
          value={input.email}
          changeHandler={changeHandler}
        />
        <Input
          required
          name='password'
          type='password'
          label='password'
          value={input.password}
          changeHandler={changeHandler}
        />
        <div className={styles.buttons}>
          <Button
            type='submit'
          >
            Submit
          </Button>
          <Button
            onClick={signInWithGoogle}
          >
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;