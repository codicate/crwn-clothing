import 'App.scss';
import { useEffect } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import { auth } from 'utils/firebase';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { setCurrentUser, selectCurrentUser } from 'app/userSlice';

import Header from 'pages/Header/Header';
import Homepage from 'pages/Homepage/Homepage';
import Checkout from 'pages/Checkout/Checkout';
import Account from 'pages/Account/Account';
import Shop from 'pages/Shop/Shop';


const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubFromAuth = auth.onAuthStateChanged(newUser => {
      dispatch(setCurrentUser(newUser));
    });

    return () => unsubFromAuth();
  }, [dispatch]);

  const currentUser = useAppSelector(selectCurrentUser);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/checkout' component={Checkout} />

        <Route exact path='/account' >
          {(
            currentUser
          ) ? (
            <Redirect to='/' />
          ) : (
            <Account />
          )}
        </Route>

        {Shop('/shop')}

        <Route path='*'>
          404
        </Route>
      </Switch>
    </>
  );
};

export default App;
