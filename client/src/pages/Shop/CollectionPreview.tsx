import styles from 'pages/Shop/CollectionPreview.module.scss';
import { Link } from 'react-router-dom';

import { Collection } from 'app/inventorySlice';

import CollectionItem from 'pages/Shop/CollectionItem';

const CollectionPreview = ({
  collection: { title, routeName, items }
}: {
  collection: Collection;
}) => {
  return (
    <div className={styles.collectionPreview}>
      <Link to={'/shop/' + routeName}>
        <h1 className={styles.title}>{title.toUpperCase()}</h1>
      </Link>
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
