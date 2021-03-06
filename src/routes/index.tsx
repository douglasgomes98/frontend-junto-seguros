import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '~/pages/Login';
import Movies from '~/pages/Movies';
import MyList from '~/pages/MyList';
import Details from '~/pages/Details';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/movies" component={Movies} isPrivate />
      <Route path="/my_list" component={MyList} isPrivate />
      <Route path="/details" component={Details} isPrivate />
    </Switch>
  );
};

export default Routes;
