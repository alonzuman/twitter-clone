import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Auth from '../Auth/Auth';
import Feed from '../Feed/Feed';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import TweetDialog from '../Tweet/TweetDialog';
import ProtectedRoute from './ProtectedRoute';
import './Router.css';

const Router = () => {
  return (
    <BrowserRouter>
      <TweetDialog />
      <div className="app__container">
        <Navbar />
        <Switch>
          <ProtectedRoute exact path='/' component={Feed} />
          <Route path='/sign-in' component={Auth} />
        </Switch>
        <Sidebar />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default Router
