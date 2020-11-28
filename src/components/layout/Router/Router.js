import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ProfileContext } from '../../../contexts/ProfileContext';
import TweetsProvider from '../../../contexts/TweetsContext';
import MoreDialog from '../../menus/MoreDialog';
import Auth from '../Auth/Auth';
import Feed from '../Feed/Feed';
import Footer from '../Footer/Footer';
import Loading from '../Loading/Loading';
import Navbar from '../Navbar/Navbar';
import Profile from '../Profile/Profile';
import ReplyDialog from '../Reply/ReplyDialog';
import Sidebar from '../Sidebar/Sidebar';
import TweetDialog from '../Tweet/TweetDialog';
import TweetPage from '../TweetPage/TweetPage';
import ProtectedRoute from './ProtectedRoute'
import './Router.css';

const Router = () => {
  const { user, isFetching } = useContext(ProfileContext);

  if (isFetching || !user) {
    return <Loading />
  } else {
    return (
      <TweetsProvider>
        <BrowserRouter>
          <TweetDialog />
          <ReplyDialog />
          <MoreDialog isOpen />
          <div className="app__container">
            <Navbar />
            <Switch>
              <ProtectedRoute exact path='/' component={Feed} />
              <ProtectedRoute path='/users/:username' component={Profile} />
              <ProtectedRoute path='/tweets/:tweetId' component={TweetPage} />
              <Route path='/sign-in' component={Auth} />
            </Switch>
            <Sidebar />
            <Footer />
          </div>
        </BrowserRouter>
      </TweetsProvider>
    )
  }
}

export default Router
