import './App.css';
import Router from './components/layout/Router/Router';
import AuthProvider from './contexts/AuthContext';
import ThemeProvider from './contexts/ThemeContext';
import TweetsProvider from './contexts/TweetsContext';
import UsersProvider from './contexts/UsersContext';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <UsersProvider>
          <TweetsProvider>
            <Router />
          </TweetsProvider>
        </UsersProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
