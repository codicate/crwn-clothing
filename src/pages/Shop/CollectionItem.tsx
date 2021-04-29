import styles from 'pages/Shop/CollectionItem.module.scss';

import { useAppDispatch } from 'app/hooks';
import { Item, addItem } from 'app/cartSlice';

import Button from 'components/Button';

const CollectionItem = ({
  item, item: { name, price, imageUrl }
}: {
  item: Item;
}) => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.collectionItem}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className={styles.collectionFooter}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>{price}</span>
      </div>
      <Button
        styleOption='inverted'
        onClick={() => dispatch(addItem(item))}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default CollectionItem;
