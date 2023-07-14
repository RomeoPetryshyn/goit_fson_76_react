import { useAuth } from './hooks/index';
import Content from './components/content/Content';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { refreshUser } from './redux/auth/operations';
import RegisterPage from './pages/register/register';
import LoginPage from './pages/login/login';
import ProtectedRoute from './routes/protectedRoute';
import NotFound from './pages/notFound/NotFound';
import { useEffect } from 'react';

function App() {
  const {
    isLoggedIn
  } = useAuth();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn]);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return <Routes>
    <Route path='/login' element={ <LoginPage />} />
    <Route path='/signup' element={ <RegisterPage />} />
    <Route 
      path='/'
      element={ <ProtectedRoute isLoggedIn={isLoggedIn}>
        <Content/>
      </ProtectedRoute>} 
    />
    <Route path="*" element={<NotFound/>}/>
  </Routes>
}

export default App;
