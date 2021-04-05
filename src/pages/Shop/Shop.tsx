import styles from 'pages/Shop/Shop.module.scss';
import INVENTORY_DATA from 'data/inventory.json';

import React from 'react';

const Shop = () => {
  return (
    <div>
      Hello {console.log(INVENTORY_DATA)}
    </div>
  );
};

export default Shop;
