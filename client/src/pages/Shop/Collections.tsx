import styles from 'pages/Shop/Collections.module.scss';

import { Collection } from 'app/inventorySlice';
import CollectionItem from 'pages/Shop/CollectionItem';

const Collections = ({
  collection: { title, items }
}: {
  collection: Collection;
}) => {
  return (
    <div className={styles.collections}>
      <h1 className={styles.title}>{title.toUpperCase()}</h1>
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

export default Collections;