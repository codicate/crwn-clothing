import styles from 'pages/Shop/Collections.module.scss';

import { Collection } from 'app/inventorySlice';
import CollectionItem from 'pages/Shop/CollectionItem';

const CollectionPage = ({
  collection: { title, items }
}: {
  collection: Collection;
}) => {
  return (
    <div className={styles.collectionPage}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.items}>
        {
          items.map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))
        }
      </div>
    </div>
  );
};

export default CollectionPage;