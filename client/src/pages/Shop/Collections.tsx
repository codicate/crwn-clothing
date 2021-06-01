import styles from 'pages/Shop/Collections.module.scss';
import { useParams } from 'react-router-dom';

import { Collection } from 'app/types';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';

import CollectionItem from 'pages/Shop/CollectionItem';


const GET_COLECTION_BY_TITLE = gql`
  query getCollectionsByTitle($title: String!) {
    getCollectionsByTitle(title: $title) {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const CollectionPage = () => {
  const { routeName } = useParams<{ routeName: string; }>();

  const { data } = useQuery<{ getCollectionsByTitle: Collection; }>(
    GET_COLECTION_BY_TITLE, {
    variables: { title: routeName }
  });

  const collection = data?.getCollectionsByTitle;

  return data ? (
    <div className={styles.collections}>
      <h2 className={styles.title}>{collection?.title.toUpperCase()}</h2>
      <div className={styles.items}>
        {
          collection?.items.map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))
        }
      </div>
    </div>
  ) : null;
};

export default CollectionPage;