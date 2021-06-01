import styles from 'pages/Header/CartItem.module.scss';
import { memo } from 'react';

import { Item } from 'app/cartSlice';

function CartItem({
  item: { imageUrl, price, name, quantity }
}: {
  item: Item;
}) {
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

export default memo(CartItem);