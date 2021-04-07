import styles from 'pages/Shop/Shop.module.scss';
import INVENTORY_DATA from 'data/inventory.json';
import CollectionPreview from 'pages/Shop/CollectionPreview';

const Shop = () => {
  return (
    <div className='shop-page'>
      {
        INVENTORY_DATA.map(({ id, ...props }) => (
          <CollectionPreview key={id} {...props} />
        ))
      }
    </div>
  );
};

export default Shop;
