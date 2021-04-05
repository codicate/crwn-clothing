import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'App.scss';

import Homepage from 'pages/Homepage';
import Item from 'pages/Item';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/item/:itemName" component={Item} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
