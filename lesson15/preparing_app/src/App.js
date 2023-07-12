import { useAuth } from './hooks/index';
import Content from './components/content/Content';
import AuthPage from './pages/authPage/AuthPage';

function App() {
  const {
    isLoggedIn,
    user
  } = useAuth();

  if (!isLoggedIn) {
    return <AuthPage/>
  }

  return (
    <div>
      Welcome {user.name}
      <Content/>
    </div>
  );
}

export default App;
