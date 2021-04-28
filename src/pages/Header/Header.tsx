import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from 'pages/Header/Header.module.scss';

import { useAppSelector } from 'app/hooks';
import { selectCurrentUser } from 'app/userSlice';
import { auth } from 'utils/firebase';

import { ReactComponent as CrownIcon } from 'assets/crown.svg';
import ShoppingIcon from 'pages/Header/ShoppingIcon';
import CardDropdown from 'pages/Header/CartDropdown';

const Header = ({ url }:
  {
    url: string;
  }
) => {
  const currentUser = useAppSelector(selectCurrentUser);

  const [showCart, setShowCart] = useState(false);

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
        <ShoppingIcon
          clickHandler={() => setShowCart(showCart => !showCart)}
        />
      </div>

      {showCart && <CardDropdown />}

    </div>
  );
};

export default Header;
