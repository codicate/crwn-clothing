import styles from 'pages/Header/Header.module.scss';

import { Link } from 'react-router-dom';

import { useAppSelector } from 'app/hooks';
import { selectCurrentUser } from 'app/user/userSlice';
import { auth } from 'utils/firebase';

import { ReactComponent as CrownIcon } from 'assets/crown.svg';
import ShoppingIcon from 'pages/Header/ShoppingIcon';

const Header = ({ url }:
  {
    url: string;
  }
) => {
  const currentUser = useAppSelector(selectCurrentUser);

  return (
    <div className={styles.header}>
      <Link to={`${url}`} className={styles.crownIconContainer}>
        <CrownIcon />
      </Link>
      <div className={styles.options}>
        <Link to={`${url}shop`}>
          SHOP
        </Link>
        <Link to={`${url}shop`}>
          CONTACT
        </Link>
        {
          currentUser ? (
            <div
              onClick={() => auth.signOut()}
            >
              SIGN OUTs
            </div>
          ) : (
            <Link to={`${url}account`}>
              SIGN IN
            </Link>
          )
        }
        <ShoppingIcon />
      </div>
    </div>
  );
};

export default Header;
