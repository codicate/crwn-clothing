import { Collection } from 'app/inventorySlice';

import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';

import CollectionPreview from 'pages/Shop/CollectionPreview';


const GET_COLLECTIONS = gql`{
  collections {
    id
    title
    items {
      id
      name
      price
      imageUrl
    }
  }
}`;

const Shop = () => {
  const { data } = useQuery<{ collections: Collection[]; }>(GET_COLLECTIONS);

  return <>
    {
      data?.collections.map((collection) => (
        <CollectionPreview
          key={collection.id}
          collection={collection}
        />
      ))
    }
  </>;
};

export default Shop;
