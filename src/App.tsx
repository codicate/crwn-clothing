import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'App.scss';

import Homepage from 'pages/Homepage/Homepage';
import Shop from 'pages/Shop/Shop';
import Item from 'pages/Item';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop}></Route>
        <Route path="/item/:itemName" component={Item} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
