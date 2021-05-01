import INVENTORY_DATA from 'data/inventory.json';
import CollectionPreview from 'pages/Shop/CollectionPreview';

const Shop = () => {
  return (
    <>
      {
        INVENTORY_DATA.map(({ id, ...props }) => (
          <CollectionPreview
            key={id}
            {...props}
          />
        ))
      }
    </>
  );
};

export default Shop;
