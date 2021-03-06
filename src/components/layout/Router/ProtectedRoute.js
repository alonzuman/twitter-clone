import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../SplashScreen/SplashScreen';
import { auth } from '../../../firebase';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [user, loading] = useAuthState(auth)

  if (loading) {
    return <Loading size='lg' />
  } else if (user) {
    return <Route {...rest} component={props => <Component {...props} />} />
  } else {
    return <Redirect to='/sign-in' />
  }
}

export default ProtectedRoute
