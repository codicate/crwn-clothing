import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';

import { firestore } from 'utils/firebase';
import { Item } from 'app/cartSlice';

import CollectionPreview from 'pages/Shop/CollectionPreview';
import CollectionPage from 'pages/Shop/CollectionPage';


interface Inventory {
  id: string;
  title: string;
  routeName: string;
  items: Item[];
}

const Shop = (path: string) => {
  const [inventory, setInventory] = useState<Inventory[]>([]);

  useEffect(() => {
    const collectionRef = firestore.collection('inventory');

    collectionRef.onSnapshot(async (snapshot) => {
      const inventoryData = snapshot.docs.map((doc) => {
        const { title, items } = doc.data();

        return {
          title,
          items,
          id: doc.id,
          routeName: encodeURI(title.toLowerCase())
        };
      });

      setInventory(inventoryData as Inventory[]);
    });
  }, []);

  return [
    (
      <Route key={path} exact path={path}>
        {
          inventory.map(({ id, ...props }) => (
            <CollectionPreview
              key={id}
              {...props}
            />
          ))
        }
      </Route>
    ),

    inventory.map(({ id, routeName, ...props }) => (
      <Route
        key={routeName}
        exact path={`${path}/${routeName}`}
      >
        <CollectionPage
          collection={props}
        />
      </Route>
    ))
  ];
};

export default Shop;
