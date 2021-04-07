import { useRef } from 'react';
import { Switch, Route, withRouter, RouteComponentProps } from "react-router-dom";
import { useAuthUser } from 'utils/firebase';

import 'App.scss';

import Header from 'pages/Header/Header';
import Homepage from 'pages/Homepage/Homepage';
import Shop from 'pages/Shop/Shop';
import Account from 'pages/Account/Account';
import Item from 'pages/Items/Item';

const App = ({ history }:
  {} & RouteComponentProps
) => {
  const user = useAuthUser();
  console.log('inside app', user);
  const defaultPath = useRef(history.location.pathname);

  return (
    <>
      <Header user={user} defaultPath={defaultPath.current} />
      <Switch>
        <Route exact path={`${defaultPath.current}/`} component={Homepage} />
        <Route exact path={`${defaultPath.current}/shop`} component={Shop} />
        <Route exact path={`${defaultPath.current}/account`} component={Account} />
        <Route path={`${defaultPath.current}/item/:itemName`} component={Item} />
      </Switch>
    </>
  );
};

export default withRouter(App);
