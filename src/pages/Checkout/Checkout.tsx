import styles from 'pages/Checkout/Checkout.module.scss';

import { useAppSelector } from 'app/hooks';
import { selectCartItems, selectCartTotalPrice } from 'app/cartSlice';

import CheckoutItem from 'pages/Checkout/CheckoutItem';

const Checkout = () => {
  const cartItems = useAppSelector(selectCartItems);
  const totalPrice = useAppSelector(selectCartTotalPrice);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.block}>
          <span>Product</span>
        </div>
        <div className={styles.block}>
          <span>Description</span>
        </div>
        <div className={styles.block}>
          <span>Quantity</span>
        </div>
        <div className={styles.block}>
          <span>Price</span>
        </div>
        <div className={styles.block}>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className={styles.total}>TOTAL: ${totalPrice}</div>
    </div>
  );
};

export default Checkout;
