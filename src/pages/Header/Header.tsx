import { Link } from 'react-router-dom';
import { auth } from 'utils/firebase';
import styles from 'pages/Header/Header.module.scss';

import { ReactComponent as Logo } from 'assets/crown.svg';

const Header = ({ user }:
  {
    user: object | null;
  }
) => {
  return (
    <div className={styles.header}>
      <Link to='/' className={styles.logoContainer}>
        <Logo />
      </Link>
      <div className={styles.options}>
        <Link to='/shop'>
          SHOP
        </Link>
        <Link to='/shop'>
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
            <Link to='/signin'>
              SIGN IN
            </Link>
          )
        }
      </div>
    </div>
  );
};

export default Header;
