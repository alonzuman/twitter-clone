import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Auth from '../Auth/Auth';
import Feed from '../Feed/Feed';
import Footer from '../Footer/Footer';
import Loading from '../Loading/Loading';
import Navbar from '../Navbar/Navbar';
import Profile from '../Profile/Profile';
import Sidebar from '../Sidebar/Sidebar';
import TweetDialog from '../Tweet/TweetDialog';
import ProtectedRoute from './ProtectedRoute';
import './Router.css';

const Router = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isFetching, isFetched, isAuth } = useContext(AuthContext);

  useEffect(() => {
    if (isFetched) {
      setIsLoading(false)
    }
  }, [isFetched])

  if (isLoading) {
    return <Loading />
  } else {
    return (
      <BrowserRouter>
        <TweetDialog />
        <div className="app__container">
          <Navbar />
          <Switch>
            <ProtectedRoute exact path='/' component={Feed} />
            <ProtectedRoute path='/users/:username' component={Profile} />
            <Route path='/sign-in' component={Auth} />
          </Switch>
          <Sidebar />
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default Router
