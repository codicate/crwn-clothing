import styles from 'pages/Shop/Shop.module.scss';
import { useEffect } from 'react';
import { Route } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'app/hooks';
import { setCollections, selectInventoryCollections } from 'app/inventorySlice';

import CollectionPreview from 'pages/Shop/CollectionPreview';
import CollectionPage from 'pages/Shop/CollectionPage';
import Spinner from 'components/Spinner';


const Shop = (path: string) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setCollections());
  }, [dispatch]);

  const inventory = useAppSelector(selectInventoryCollections);

  return (
    inventory.length === 0
  ) ? (
    <>
      <div className={styles.spinnerContainer}>
        <Spinner color='black' />
      </div>
    </>
  ) : (
    [
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
    ]
  );
};

export default Shop;
