import { Route } from 'react-router-dom';

import INVENTORY_DATA from 'data/inventory.json';
import CollectionPage from 'pages/Shop/CollectionPage';

const ShopRoute = (
  path: string
) => {
  return (
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
  );
};
export default ShopRoute;