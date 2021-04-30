import styles from 'pages/Shop/Shop.module.scss';
import { Route, match } from 'react-router-dom';

import INVENTORY_DATA from 'data/inventory.json';

import CollectionPreview from 'pages/Shop/CollectionPreview';
import CollectionPage from 'pages/Shop/CollectionPage';

const Shop = ({
  match
}: {
  match: match;
}) => {
  console.log(match);
  return (
    <div className={styles.shopPage}>
      <Route exact path={`${match.path}`} >
        <div className={styles.collectionOverview}>
          {
            INVENTORY_DATA.map(({ id, ...props }) => (
              <CollectionPreview
                key={id}
                {...props}
              />
            ))
          }
        </div>
      </Route>
      {
        INVENTORY_DATA.map(({ id, routeName, ...props }) => (
          <Route exact path={`${match.path}/${routeName}`}  >
            {console.log(routeName)}
            <CollectionPage
              key={routeName}
              collection={props}
            />
          </Route>
        ))
      }
    </div>
        );
};

export default Shop;
