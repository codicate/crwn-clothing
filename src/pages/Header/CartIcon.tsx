import styles from 'pages/Header/CartIcon.module.scss';

import { ReactComponent as Icon } from 'assets/shopping-bag.svg';

const CartIcon = ({ clickHandler }:
  {
    clickHandler(): void;
  }
) => {
  return (
    <div className={styles.cartIconContainer} >
      <Icon
        className={styles.cartIcon}
        onClick={clickHandler}
      />
      <span className={styles.itemCount}>
        0
      </span>
    </div>
  );
};

export default CartIcon;
