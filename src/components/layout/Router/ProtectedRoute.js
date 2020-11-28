import React, { useContext, useEffect } from 'react'
import { Redirect, Route } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';
import { auth } from '../../../firebase';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [user, loading, error] = useAuthState(auth)

  if (loading) {
    return <Loading size='lg' />
  } else if (user) {
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
