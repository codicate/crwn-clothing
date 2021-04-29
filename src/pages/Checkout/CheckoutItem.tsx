import styles from 'pages/Checkout/CheckoutItem.module.scss';

import { useAppDispatch } from 'app/hooks';
import { removeItem, Item } from 'app/cartSlice';

const CheckoutItem = ({
  item, item: { name, price, imageUrl, quantity }
}: {
  item: Item & { quantity: number; };
}) => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.item}>
      <div className={styles.imgContainer}>
        <img src={imageUrl} alt='item' />
      </div>
      <span className={styles.name}>{name}</span>
      <span className={styles.quantity}>{quantity}</span>
      <span className={styles.price}>{price}</span>
      <div
        className={styles.removeBtn}
        onClick={() => {
          dispatch(removeItem(item))
        }}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
