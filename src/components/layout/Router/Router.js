import React, { Suspense, useContext } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { ProfileContext } from '../../../contexts/ProfileContext';
import TweetsProvider from '../../../contexts/TweetsContext';
import Auth from '../Auth/Auth';
import Dialogs from '../Dialogs/Dialogs';
import Footer from '../Footer/Footer';
import SplashScreen from '../SplashScreen/SplashScreen';
import Navbar from '../Navbar/Navbar';
import Profile from '../Profile/Profile';
import TweetPage from '../TweetPage/TweetPage';
import ProtectedRoute from './ProtectedRoute'
import './Router.css';
import Messages from '../Messages/Messages';
import MessagesProvider from '../../../contexts/MessagesContext';
import Home from '../Home/Home';
import Container from '../Container/Container';
import FooterMessenger from '../FooterMessenger/FooterMessenger';

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
          <Container>
            <Navbar />
            <Switch>
              {(isFetching || !user) && <SplashScreen />}
              <ProtectedRoute exact path='/' component={() => <Redirect to='/home' />} />
              <ProtectedRoute path='/home' component={Home} />
              <ProtectedRoute path='/messages' component={Messages} />
              <ProtectedRoute path='/tweets/:tweetId' component={TweetPage} />
              <ProtectedRoute exact path='/:username' component={Profile} />
              <Route path='/sign-in' component={Auth} />
            </Switch>
            <Suspense fallback={<null />}>
              <FooterMessenger />
            </Suspense>
            <Suspense fallback={<div className='footer__fallback' />}>
              <Footer />
            </Suspense>
          </Container>
        </BrowserRouter>
      </MessagesProvider>
    </TweetsProvider>
  )
}

export default Router
