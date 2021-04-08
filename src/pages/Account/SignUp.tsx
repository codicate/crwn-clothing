import { auth } from 'utils/firebase';
import styles from 'pages/Account/Account.module.scss';

import Form from 'components/Form';
import Button from 'components/Button';

const SignUp = () => {
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
          ['displayName', 'Display Name',
            { required: true }
          ],
          ['email', 'Email',
            { type: 'email', required: true }
          ],
          ['password', 'Password',
            { type: 'password', required: true }
          ],
          ['confirmPassword', 'Confirm Password',
            { type: 'password', required: true }
          ]
        ]}
        submitFn={async ({ displayName, email, password, confirmPassword }:
          {
            [name: string]: string;
          }
        ) => {
          if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
          }

          try {
            await auth.createUserWithEmailAndPassword(email, password);
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