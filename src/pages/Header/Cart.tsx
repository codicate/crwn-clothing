import styles from 'pages/Header/Cart.module.scss';

import { useAppSelector } from 'app/hooks';
import { selectCartItems } from 'app/cartSlice';

import Button from 'components/Button';
import CartItem from 'pages/Header/CartItem';

const Cart = () => {
  const cartItems = useAppSelector(selectCartItems);


  return (
    <div className={styles.cart}>
      <div className={styles.cartItems} >
        {(
          cartItems.length === 0
        ) ? (
          <span className={styles.emptyMsg}>Your cart is empty</span>
        ) : (
          cartItems.map((item) =>
            <CartItem key={item.id} item={item} />
          )
        )}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default Cart;
