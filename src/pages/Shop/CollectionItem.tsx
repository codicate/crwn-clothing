import styles from 'pages/Shop/CollectionItem.module.scss';

import Button from 'components/Button';

const CollectionItem = ({ name, price, imageUrl }:
  {
    name: string;
    price: number;
    imageUrl: string;
  }
) => {
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
