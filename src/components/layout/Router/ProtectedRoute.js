import React, { useContext, useEffect } from 'react'
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext'
import Loading from '../Loading/Loading';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isAuth, isFetching, isFetched } = useContext(AuthContext);

  if (isFetching) {
    return <Loading size='lg' />
  } else if (isAuth) {
    return (
      <main role="main" className="main__wrapper">
        <Route {...rest} component={props => <Component {...props} />} />
      </main>
    )
  } else {
    return <Redirect to='/sign-in' />
  }
}

export default ProtectedRoute
