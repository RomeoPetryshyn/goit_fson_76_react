import { useAuth } from './hooks/index';
import Content from './components/content/Content';
import AuthPage from './pages/authPage/AuthPage';

function App() {
  const {
    isLoggedIn
  } = useAuth();

  if (isLoggedIn) {
    return <Content />
  } else {
    return <AuthPage />
  }
}

export default App;
