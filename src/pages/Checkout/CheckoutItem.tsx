import styles from 'pages/Checkout/CheckoutItem.module.scss';

import { Item } from 'app/cartSlice';

const CheckoutItem = ({
  cartItem: { name, price, imageUrl, quantity }
}: {
  cartItem: Item & { quantity: number; };
}) => {
  return (
    <div className={styles.item}>
      <div className={styles.imgContainer}>
        <img src={imageUrl} alt='item' />
      </div>
      <span className={styles.name}>{name}</span>
      <span className={styles.quantity}>{quantity}</span>
      <span className={styles.price}>{price}</span>
      <div className={styles.removeBtn}>&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
