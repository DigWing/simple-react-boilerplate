import React from 'react';
import { Switch, Route } from 'react-router';
import * as screens from 'screens';

const App = () => (
  <div>
    <Switch>
      <Route path="/nextroute" component={screens.NextScreen} />
      <Route path="/" component={screens.HomeScreen} />
    </Switch>
  </div>
);

export default App;
