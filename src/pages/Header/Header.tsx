import { Link } from 'react-router-dom';
import styles from 'pages/Header/Header.module.scss';

import { ReactComponent as Logo } from 'assets/crown.svg';

const Header = () => {
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
      </div>
    </div>
  );
};

export default Header;
