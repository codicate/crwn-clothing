import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from 'pages/Header/Header.module.scss';

import { useAppSelector } from 'app/hooks';
import { selectCurrentUser } from 'app/userSlice';
import { auth } from 'utils/firebase';

import { ReactComponent as CrownIcon } from 'assets/crown.svg';
import CartIcon from 'pages/Header/CartIcon';
import Cart from 'pages/Header/Cart';

const Header = () => {
  const [showCart, setShowCart] = useState(false);

  const currentUser = useAppSelector(selectCurrentUser);

  return (
    <div className={styles.header}>
      <Link to='/' className={styles.crownIconContainer}>
        <CrownIcon />
      </Link>

      <div className={styles.options}>
        <Link to='/shop'>
          SHOP
        </Link>
        <Link to='/contact'>
          CONTACT
        </Link>
        {
          currentUser ? (
            <div
              onClick={() => auth.signOut()}
            >
              SIGN OUT
            </div>
          ) : (
            <Link to='/account'>
              SIGN IN
            </Link>
          )
        }
        <CartIcon
          clickHandler={() => setShowCart(showCart => !showCart)}
        />
      </div>

      {showCart && <Cart hideCart={() => setShowCart(false)} />}

    </div>
  );
};

export default Header;
