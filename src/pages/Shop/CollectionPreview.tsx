import styles from 'pages/Shop/CollectionPreview.module.scss';

import { Item } from 'app/cartSlice';

import CollectionItem from 'pages/Shop/CollectionItem';

const CollectionPreview = ({ title, items }:
  {
    title: string;
    items: Item[];
  }
) => {
  return (
    <div className={styles.collectionPreview}>
      <h1 className={styles.title}>{title.toUpperCase()}</h1>
      <div className={styles.preview}>
        {
          items
            .filter((_, idx) => idx < 4)
            .map((item) => (
              <CollectionItem key={item.id} item={item} />
            ))
        }
      </div>
    </div>
  );
};

export default CollectionPreview;
