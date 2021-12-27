import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { appContext } from './context';

const PrivateRoute = ({ component: Component, ...rest }) => {

  const { isAuth } = useContext(appContext);

  return (
    <Route {...rest} render={props => (
      isAuth === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
  );

}

export default PrivateRoute;
