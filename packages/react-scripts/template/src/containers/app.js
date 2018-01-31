import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './privateRoute';
import Login from './login';
import Home from './home';

export default () => (
  <Switch>
    <Route path="/login" component={Login} />
    <PrivateRoute exact path="/" component={Home} />
  </Switch>
);
