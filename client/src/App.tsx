import 'App.scss';
import { lazy, Suspense, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { auth } from 'utils/firebase';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { setCurrentUser, selectCurrentUser } from 'app/userSlice';
import { fetchCollections, selectCollections } from 'app/inventorySlice';

import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from 'components/ErrorFallback';

import Spinner from 'components/Spinner';
import Header from 'pages/Header/Header';
import Homepage from 'pages/Homepage/Homepage';

const Checkout = lazy(() => import('pages/Checkout/Checkout'));
const Account = lazy(() => import('pages/Account/Account'));
const Shop = lazy(() => import('pages/Shop/Shop'));
const Collections = lazy(() => import('pages/Shop/Collections'));


const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCollections());

    const unsubFromAuth = auth.onAuthStateChanged(newUser => {
      dispatch(setCurrentUser(newUser));
    });

    return () => unsubFromAuth();
  }, [dispatch]);

  const inventory = useAppSelector(selectCollections);
  const currentUser = useAppSelector(selectCurrentUser);

  return (
    <>
      <Header />
      <Switch>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onError={(error) => console.error('ErrorBoundary error', error)}
        >
          <Suspense fallback={
            <div className='spinnerContainer'>
              <Spinner color='black' />
            </div>
          }>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/checkout' component={Checkout} />
            <Route exact path='/shop' component={Shop} />

            <Route exact path='/account' >
              {(
                currentUser
              ) ? (
                <Redirect to='/' />
              ) : (
                <Account />
              )}
            </Route>

            {
              inventory.map((collection) => (
                <Route exact
                  key={collection.routeName}
                  path={'/shop/' + collection.routeName}
                >
                  <Collections
                    collection={collection}
                  />
                </Route>
              ))
            }
          </Suspense>
        </ErrorBoundary>

        <Route path='*'>
          404
        </Route>
      </Switch>
    </>
  );
};

export default App;
