import styles from 'pages/Shop/CollectionPage.module.scss';

import { Item } from 'app/cartSlice';
import CollectionItem from 'pages/Shop/CollectionItem';

interface Collection {
  title: string;
  items: Item[];
}

const CollectionPage = ({
  collection: { title, items }
}: {
  collection: Collection;
}) => {
  return (
    <div className={styles.collectionPage}>
      <h2 className={styles.page}>{title}</h2>
      <div className={styles.items}>
        {
          items.map((item: Item) => (
            <CollectionItem key={item.id} item={item} />
          ))
        }
      </div>
    </div>
  );
};

export default CollectionPage;