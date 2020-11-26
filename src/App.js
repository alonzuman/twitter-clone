import { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Feed from './components/layout/Feed/Feed';
import Footer from './components/layout/Footer/Footer';
import Navbar from './components/layout/Navbar/Navbar';
import Sidebar from './components/layout/Sidebar/Sidebar';
import TweetDialog from './components/layout/Tweet/TweetDialog';
import ThemeProvider from './contexts/ThemeContext';
import TweetsProvider from './contexts/TweetsContext';
import UsersProvider from './contexts/UsersContext';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <UsersProvider>
          <TweetsProvider>
            <Suspense fallback={null}><TweetDialog /></Suspense>
            <div className="app__container">
              <Suspense fallback={null}>
                <Navbar />
              </Suspense>
              <main role="main" className="main__wrapper">
                <Switch>
                  <Route exact path='/' component={Feed} />
                </Switch>
              </main>
              <Sidebar />
              <Suspense fallback={null}>
                <Footer />
              </Suspense>
            </div>
          </TweetsProvider>
        </UsersProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
