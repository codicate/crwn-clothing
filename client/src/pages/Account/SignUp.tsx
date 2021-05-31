import styles from 'pages/Account/Account.module.scss';

import { auth, createAuthUserDoc } from 'utils/firebase';

import Form from 'components/Form';
import Button from 'components/Button';

const SignUp = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        I do not have a account
      </h2>
      <span className={styles.title}>
        Sign up with your email and password
      </span>

      <Form
        inputItems={{
          displayName: {
            label: 'Display Name',
            required: true
          },
          email: {
            label: 'Email',
            type: 'email',
            required: true
          },
          password: {
            label: 'Password',
            type: 'password',
            required: true
          },
          confirmPassword: {
            label: 'Confirm Password',
            type: 'password',
            required: true
          }
        }}
        submitFn={async ({ displayName, email, password, confirmPassword }:
          { [name: string]: string; }
        ) => {
          if (password.length < 6) {
            alert("Passwords should be at least 6 characters");
            return;
          }

          if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
          }

          try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            user && await createAuthUserDoc(user, { displayName });
            return true;

          } catch (err) {
            console.error(err);
          }
        }}
      >
        <Button
          type='submit'
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;