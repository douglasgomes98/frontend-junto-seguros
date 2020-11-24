import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '~/pages/Login';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
