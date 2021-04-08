import { FormEvent, useState } from 'react';
import styles from 'pages/Account/Account.module.scss';

import { signInWithGoogle } from 'utils/firebase';
import Form from 'components/Form';
import Button from 'components/Button';

const SignIn = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        I already have an account
      </h2>
      <span className={styles.title}>
        Sign in with your email and password
      </span>
      <Form
        inputItems={[
          ['email', '', 'Email',
            { type: 'email', required: true }
          ],
          ['password', '', 'Password',
            { type: 'password', required: true }
          ]
        ]}
      >
        <div className={styles.buttons}>
          <Button
            type='submit'
          >
            Submit
          </Button>
          <Button
            styleOption='google'
            onClick={signInWithGoogle}
          >
            Sign in with Google
          </Button>
        </div>
      </Form>
    </div >
  );
};

export default SignIn;