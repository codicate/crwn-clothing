import { Link } from 'react-router-dom';
import { auth } from 'utils/firebase';
import styles from 'pages/Header/Header.module.scss';

import { ReactComponent as Logo } from 'assets/crown.svg';

const Header = ({ user, defaultPath }:
  {
    user: object | null;
    defaultPath: string;
  }
) => {
  return (
    <div className={styles.header}>
      {console.log(defaultPath)}
      <Link to={`${defaultPath}`} className={styles.logoContainer}>
        <Logo />
      </Link>
      <div className={styles.options}>
        <Link to={`${defaultPath}/shop`}>
          SHOP
        </Link>
        <Link to={`${defaultPath}/shop`}>
          CONTACT
        </Link>
        {
          user ? (
            <div
              onClick={() => auth.signOut()}
            >
              SIGN OUT
            </div>
          ) : (
            <Link to={`${defaultPath}/account`}>
              SIGN IN
            </Link>
          )
        }
      </div>
    </div>
  );
};

export default Header;
