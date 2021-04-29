import styles from 'pages/Header/CartItem.module.scss';

import { Item } from 'app/cartSlice';

const CartItem = ({
  item: { imageUrl, price, name, quantity }
}: {
  item: Item & { quantity: number; };
}) => {
  return (
    <div className={styles.cartItem}>
      <img src={imageUrl} alt='item' />
      <div className={styles.itemDetails}>
        <span className={styles.name}>
          {name}
        </span>
        <span className={styles.price}>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;