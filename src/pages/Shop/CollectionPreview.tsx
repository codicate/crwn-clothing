import styles from 'pages/Shop/CollectionPreview.module.scss';
import CollectionItem from 'pages/Shop/CollectionItem';

const CollectionPreview = ({ title, items }:
  {
    title: string;
    items: {
      id: number;
      name: string;
      price: number;
      imageUrl: string;
    }[];
  }
) => (
  <div className={styles.collectionPreview}>
    <h1 className={styles.title}>{title.toUpperCase()}</h1>
    <div className={styles.preview}>
      {items
        .filter((_, idx) => idx < 4)
        .map(({ id, ...props }) => (
          <CollectionItem key={id} {...props} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
