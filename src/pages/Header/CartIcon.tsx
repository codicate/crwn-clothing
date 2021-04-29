import styles from 'pages/Header/CartIcon.module.scss';

import { useAppSelector } from 'app/hooks';
import { selectCartItems } from 'app/cartSlice';

import { ReactComponent as Icon } from 'assets/shopping-bag.svg';

const CartIcon = ({
  clickHandler
}: {
  clickHandler(): void;
}) => {
  const cartItems = useAppSelector(selectCartItems);

  return (
    <div className={styles.cartIconContainer} >
      <Icon
        className={styles.cartIcon}
        onClick={clickHandler}
      />
      <span className={styles.itemCount}>
        {
          cartItems.reduce((totalQuantity, item) => {
            return totalQuantity += item.quantity;
          }, 0)
        }
      </span>
    </div>
  );
};

export default CartIcon;
