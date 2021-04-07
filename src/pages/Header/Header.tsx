import { Link } from 'react-router-dom';
import { auth } from 'utils/firebase';
import styles from 'pages/Header/Header.module.scss';

import { ReactComponent as Logo } from 'assets/crown.svg';

const Header = ({ user, url }:
  {
    user: object | null;
    url: string;
  }
) => {
  return (
    <div className={styles.header}>
      <Link to={`${url}`} className={styles.logoContainer}>
        <Logo />
      </Link>
      <div className={styles.options}>
        <Link to={`${url}shop`}>
          SHOP
        </Link>
        <Link to={`${url}shop`}>
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
            <Link to={`${url}account`}>
              SIGN IN
            </Link>
          )
        }
      </div>
    </div>
  );
};

export default Header;
