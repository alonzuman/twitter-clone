import React, { Suspense, useContext } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { ProfileContext } from '../../../contexts/ProfileContext';
import TweetsProvider from '../../../contexts/TweetsContext';
import Auth from '../Auth/Auth';
import Dialogs from '../Dialogs.js/Dialogs';
import Feed from '../Feed/Feed';
import Footer from '../Footer/Footer';
import SplashScreen from '../SplashScreen/SplashScreen';
import Navbar from '../Navbar/Navbar';
import Profile from '../Profile/Profile';
import Sidebar from '../Sidebar/Sidebar';
import TweetPage from '../TweetPage/TweetPage';
import ProtectedRoute from './ProtectedRoute'
import './Router.css';
import Messages from '../Messages/Messages';
import MessagesProvider from '../../../contexts/MessagesContext';

const Router = () => {
  const { user, isFetching } = useContext(ProfileContext);

  if (!user) {
    return <SplashScreen />
  }

  return (
    <TweetsProvider>
      <MessagesProvider>
        <BrowserRouter>
          <Dialogs />
          <div className="app__container">
            <Navbar />
            <Switch>
              {(isFetching || !user) && <SplashScreen />}
              <ProtectedRoute exact path='/' component={() => <Redirect to='/home' />} />
              <ProtectedRoute path='/home' component={Feed} />
              <ProtectedRoute path='/messages' component={Messages} />
              <ProtectedRoute path='/tweets/:tweetId' component={TweetPage} />
              <ProtectedRoute exact path='/:username' component={Profile} />
              <Route path='/sign-in' component={Auth} />
            </Switch>
            <Suspense fallback={<div className='sidebar__fallback' />}>
              <Sidebar />
            </Suspense>
            <Suspense fallback={<div className='footer__fallback' />}>
              <Footer />
            </Suspense>
          </div>
        </BrowserRouter>
      </MessagesProvider>
    </TweetsProvider>
  )
}

export default Router
