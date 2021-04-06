import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useAuthUser } from 'utils/firebase';

import 'App.scss';

import Header from 'pages/Header/Header';
import Homepage from 'pages/Homepage/Homepage';
import Shop from 'pages/Shop/Shop';
import Account from 'pages/Account/Account';
import Item from 'pages/Items/Item';


function App() {
  const user = useAuthUser();
  console.log('inside app', user);

  return <>
    <BrowserRouter>
      <Header user={user} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/account" component={Account} />
        <Route path="/item/:itemName" component={Item} />
      </Switch>
    </BrowserRouter>
  </>;
}

export default App;
