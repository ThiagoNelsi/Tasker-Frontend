import React from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import { api } from './api/api';

const PrivateRoutes = ({ component: Component, ...rest }) => {
  
  async function isAuthenticated() {
    const token = `Bearer ${localStorage.getItem('authorization')}`;
    const isAuth = await api.get('isAuthenticated',  { 
      headers: { authorization: token }
    });
    return isAuth.isAuth;
  }

  return (
    <Route {...rest} render={props => (
      
        isAuthenticated() ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )

    )} />
  )
};


export default PrivateRoutes;