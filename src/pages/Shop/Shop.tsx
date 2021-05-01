import { Route } from 'react-router-dom';

import INVENTORY_DATA from 'data/inventory.json';
import CollectionPreview from 'pages/Shop/CollectionPreview';
import CollectionPage from 'pages/Shop/CollectionPage';

const Shop = (path: string) => {
  return [
    (
      <Route key={path} exact path={path}>
        {
          INVENTORY_DATA.map(({ id, ...props }) => (
            <CollectionPreview
              key={id}
              {...props}
            />
          ))
        }
      </Route>
    ),

    INVENTORY_DATA.map(({ id, routeName, ...props }) => (
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
