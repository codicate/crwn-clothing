import 'App.scss';
import { useEffect } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import { useAppDispatch } from 'app/hooks';
import { setCurrentUser } from 'app/userSlice';
import { useAuthUser } from 'utils/firebase';

import Header from 'pages/Header/Header';
import Homepage from 'pages/Homepage/Homepage';
import Checkout from 'pages/Checkout/Checkout';
import Account from 'pages/Account/Account';
import Shop from 'pages/Shop/Shop';
import ShopRoute from 'pages/Shop/ShopRoute';

const App = () => {
  const user = useAuthUser();

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setCurrentUser(user));
  }, [dispatch, user]);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/checkout' component={Checkout} />

        <Route exact path='/account' >
          {(
            user
          ) ? (
            <Redirect to='/' />
          ) : (
            <Account />
          )}
        </Route>

        <Route exact path='/shop' component={Shop} />
        {ShopRoute('/shop')}

        <Route path='*'>
          404
        </Route>
      </Switch>
    </>
  );
};

export default App;
