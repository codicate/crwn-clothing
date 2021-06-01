import styles from 'pages/Shop/Collections.module.scss';

import { Collection } from 'app/inventorySlice';
import CollectionItem from 'pages/Shop/CollectionItem';

const CollectionPage = ({
  collection: { title, items }
}: {
  collection: Collection;
}) => {
  return (
    <div className={styles.collections}>
      <h2 className={styles.title}>{title.toUpperCase()}</h2>
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