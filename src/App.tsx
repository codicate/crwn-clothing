import 'App.scss';

import { useEffect, useRef } from 'react';
import { Switch, Route, Redirect, useLocation } from "react-router-dom";

import { useAppDispatch } from 'app/hooks';
import { setCurrentUser } from 'app/user/userSlice';
import { useAuthUser } from 'utils/firebase';

import Header from 'pages/Header/Header';
import Homepage from 'pages/Homepage/Homepage';
import Shop from 'pages/Shop/Shop';
import Account from 'pages/Account/Account';
import Item from 'pages/Items/Item';

const App = () => {
  const location = useLocation();
  const url = useRef(location.pathname);

  const user = useAuthUser();

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setCurrentUser(user));
  }, [dispatch, user]);

  return (
    <>
      <Header url={url.current} />
      <Switch>
        <Route exact path={`${url.current}`} component={Homepage} />
        <Route exact path={`${url.current}shop`} component={Shop} />
        <Route exact path={`${url.current}account`} >
          {
            user
              ? <Redirect to={url.current} />
              : <Account />
          }
        </Route>
        <Route path={`${url.current}item/:itemName`} component={Item} />
      </Switch>
    </>
  );
};

export default App;
