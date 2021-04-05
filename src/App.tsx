import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'App.scss';

import Homepage from 'pages/Homepage';

function App() { 
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
