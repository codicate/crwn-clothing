import { useAppSelector } from 'app/hooks';
import { selectCollections } from 'app/inventorySlice';

import CollectionPreview from 'pages/Shop/CollectionPreview';

const Shop = () => {
  const inventory = useAppSelector(selectCollections);

  return <>
    {
      inventory.map((collection) => (
        <CollectionPreview
          key={collection.id}
          collection={collection}
        />
      ))
    }
  </>;
};

export default Shop;
