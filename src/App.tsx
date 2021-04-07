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
  
  const url = useRef(history.location.pathname);

  return (
    <>
      <Header user={user} url={url.current} />
      <Switch>
        <Route exact path={`${url.current}`} component={Homepage} />
        <Route exact path={`${url.current}shop`} component={Shop} />
        <Route exact path={`${url.current}account`} component={Account} />
        <Route path={`${url.current}item/:itemName`} component={Item} />
      </Switch>
    </>
  );
};

export default withRouter(App);
