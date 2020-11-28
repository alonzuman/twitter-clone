import './App.css';
import Auth from './components/layout/Auth/Auth';
import Loading from './components/layout/Loading/Loading';
import Router from './components/layout/Router/Router';
import ProfileProvider, { ProfileContext } from './contexts/ProfileContext';
import ThemeProvider from './contexts/ThemeContext';
import UsersProvider from './contexts/UsersContext';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
  const [user, loading] = useAuthState(auth);

  return (
    <ThemeProvider>
      <ProfileProvider>
        <UsersProvider>
          {loading && !user && <Loading />}
          {user && !loading && <Router />}
          {!loading && !user && <Auth />}
        </UsersProvider>
      </ProfileProvider>
    </ThemeProvider>
  );
}

export default App;
