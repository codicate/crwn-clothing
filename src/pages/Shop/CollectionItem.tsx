import styles from 'pages/Shop/CollectionItem.module.scss';

import React from 'react';

const CollectionItem = ({ name, price, imageUrl }:
  {
    name: string;
    price: number;
    imageUrl: string;
  }
) => (
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
  </div>
);

export default CollectionItem;
