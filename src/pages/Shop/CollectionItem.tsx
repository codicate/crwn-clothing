import styles from 'pages/Shop/CollectionItem.module.scss';

import { useAppDispatch } from 'app/hooks';
import { setCartItems } from 'app/cartSlice';

import Button from 'components/Button';
import { useEffect } from 'react';

const CollectionItem = ({ name, price, imageUrl }:
  {
    name: string;
    price: number;
    imageUrl: string;
  }
) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setCartItems('hello'));
  }, [dispatch]);

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
        onClick={() => { }}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default CollectionItem;
