import styles from 'pages/Checkout/CheckoutItem.module.scss';

import { useAppDispatch } from 'app/hooks';
import { addItemByOne, removeItemByOne, removeAllItem, Item } from 'app/cartSlice';

const CheckoutItem = ({
  item, item: { name, price, imageUrl, quantity }
}: {
  item: Item;
}) => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.item}>
      <div className={styles.imgContainer}>
        <img src={imageUrl} alt='item' />
      </div>
      <span className={styles.name}>
        {name}
      </span>

      <span className={styles.quantity}>
        <div
          className={styles.arrow}
          onClick={() => dispatch(removeItemByOne(item))}
        >
          &#10094;
        </div>
        <span className={styles.value}>
          {quantity}
        </span>
        <div
          className={styles.arrow}
          onClick={() => dispatch(addItemByOne(item))}
        >
          &#10095;
        </div>
      </span>

      <span className={styles.price}>
        {price}
      </span>
      <div
        className={styles.removeBtn}
        onClick={() => {
          dispatch(removeAllItem(item));
        }}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
