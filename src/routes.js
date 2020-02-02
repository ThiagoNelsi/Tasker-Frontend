import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';

import PrivateRoute from './privateRoutes';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/login' component={() => <Login />} />
      <Route exact path='/register' component={() => <Register />} />
      <PrivateRoute exact path='/dashboard' component={() => <h1>Deu Certo</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;