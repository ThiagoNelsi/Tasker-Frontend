import React, { useState, useEffect } from 'react';
import { Route, Redirect} from 'react-router-dom';

import api from './services/api';

const PrivateRoute = ({ component: Component, ...rest }) => {
  
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    async function isAuthenticated() {
      try{
        const response = await api.post('/isauth');
        console.log(response.data)
        return response.data.isAuth;
      } catch (err) {
        return false;
      }
    }
    setIsAuth(isAuthenticated());
  }, []);

  return (
    <Route {...rest} render={props => (
      isAuth ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      )
    )} />
  )

};

export default PrivateRoute;