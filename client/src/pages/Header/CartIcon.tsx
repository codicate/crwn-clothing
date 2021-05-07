import styles from 'pages/Header/CartIcon.module.scss';

import { useAppSelector } from 'app/hooks';
import { selectCartTotalQuantity } from 'app/cartSlice';

import { ReactComponent as Icon } from 'assets/shopping-bag.svg';

const CartIcon = ({
  clickHandler
}: {
  clickHandler(): void;
}) => {
  const totalQuantity = useAppSelector(selectCartTotalQuantity);

  return (
    <div className={styles.cartIconContainer} >
      <Icon
        className={styles.cartIcon}
        onClick={clickHandler}
      />
      <span className={styles.itemCount}>
        {totalQuantity}
      </span>
    </div>
  );
};

export default CartIcon;
