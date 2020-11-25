import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '~/pages/Login';
import Dashboard from '~/pages/Dashboard';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/dashboard" exact component={Dashboard} />
    </Switch>
  );
};

export default Routes;
