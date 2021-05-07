import styles from 'pages/Checkout/Checkout.module.scss';

import { useAppSelector } from 'app/hooks';
import { selectCartItems, selectCartTotalPrice } from 'app/cartSlice';

import StripeCheckoutBtn from 'components/StripeCheckoutBtn';
import CheckoutItem from 'pages/Checkout/CheckoutItem';

const Checkout = () => {
  const cartItems = useAppSelector(selectCartItems);
  const totalPrice = useAppSelector(selectCartTotalPrice);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <span>Product</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Remove</span>
      </div>

      {
        cartItems.map(cartItem => (
          <CheckoutItem key={cartItem.id} item={cartItem} />
        ))
      }

      <div className={styles.total}>TOTAL: ${totalPrice}</div>
      <StripeCheckoutBtn price={totalPrice} />
    </div>
  );
};

export default Checkout;
