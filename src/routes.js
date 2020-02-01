import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Login from './pages/Login';

const PrivateRoutes = ({ component: Component, ...rest }) => {
  console.log(rest);
  return (
    <Route {...rest} render={props => (
      <Component {...props} />
    )} />
  )
};

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={() => <Login />} />
      <PrivateRoutes exact path='/app' component={() => <h1>Deu Certo</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;