import styles from 'pages/Account/Account.module.scss';

import SignIn from 'pages/Account/SignIn';
import SignUp from 'pages/Account/SignUp';

const Account = () => {
  return (
    <div className={styles.account}>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Account;