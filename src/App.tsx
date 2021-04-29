import 'App.scss';
import { useEffect } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import { useAppDispatch } from 'app/hooks';
import { setCurrentUser } from 'app/userSlice';
import { useAuthUser } from 'utils/firebase';

import Header from 'pages/Header/Header';
import Homepage from 'pages/Homepage/Homepage';
import Shop from 'pages/Shop/Shop';
import Account from 'pages/Account/Account';
import Checkout from 'pages/Checkout/Checkout';
import Item from 'pages/Items/Item';

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
        <Route exact path='/shop' component={Shop} />
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
        <Route path='/item/:itemName' component={Item} />
        <Route>
          404
        </Route>
      </Switch>
    </>
  );
};

export default App;
