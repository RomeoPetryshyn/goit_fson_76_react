// 2.1.1
import { createSlice } from '@reduxjs/toolkit';
import { register, logIn } from './operations';

const initialState = {
    user: { name: null, email: null },
    token: null,
    isAuthError: false,
    isLoggedIn: false,
    isRefreshing: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
      [register.fulfilled](state, action) {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isAuthError = false;
      },
      [register.rejected](state, _action) {
        state.isAuthError = true;
      },
      [logIn.fulfilled](state, action) {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isAuthError = false;
      },
      [logIn.rejected](state, _action) {
        state.isAuthError = true;
      }
    },
});

export const authReducer = authSlice.reducer;













// 3.1
import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks";
import { logIn } from "../../redux/auth/operations";
import { useState } from "react";
import PasswordStrengthBar from 'react-password-strength-bar';

function LoginPage() {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const { isAuthError } = useAuth();
    
    const dispatch = useDispatch();

    const handleLogin = () => dispatch(logIn({ email, password }));
    
    return (
        <div style={{margin: 50}}>
            <div>Login</div>
            <input 
                type="email" 
                placeholder="Please enter your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            /> <br/>
            <input 
                type="password" 
                placeholder="Please enter your password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            /> <br/>
            <div style={{width: 150}}><PasswordStrengthBar password={password} /></div>
            {isAuthError && <div>Error occured during login. Email or Password is incorrect</div>}
            <button onClick={handleLogin}>Login</button> <br/> <br/>
            <button>Go to register!</button>
        </div>
    );
}

export default LoginPage;







// 3.2
import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks";
import { register } from "../../redux/auth/operations";
import { useState } from "react";
import PasswordStrengthBar from 'react-password-strength-bar';

function RegisterPage() {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const { isAuthError } = useAuth();
    
    const dispatch = useDispatch();

    const handleSignup = () => dispatch(register({ email, password, name }));
    
    return (
        <div style={{margin: 50}}>
            <div>Sign up</div>
            <input 
                type="text" 
                placeholder="Please enter your name"
                value={name}
                onChange={(event) => setName(event.target.value)}
            /> <br/>
            <input 
                type="email" 
                placeholder="Please enter your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            /> <br/>
            <input 
                type="password" 
                placeholder="Please enter your password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            /> <br/>
            <div style={{width: 150}}><PasswordStrengthBar password={password} /></div>
            {isAuthError && <div>Error occured during signup. Email or Password is incorrect</div>}
            <button onClick={handleSignup}>Sign up</button> <br/> <br/>
            <button>Go to login!</button>
        </div>
    );
}

export default RegisterPage;














// 4.1
import { Navigate } from "react-router-dom";

function ProtectedRoute({ isLoggedIn, children }) {
    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }
    return children;
}

export default ProtectedRoute;




// 4.2
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/', { replace: true });
        }, 3000);
    }, []);

    return <>
        <div style={{marginTop: 10}}>Page not found</div>
    </>
}

export default NotFound;



// 4.3
import { useAuth } from './hooks/index';
import Content from './components/content/Content';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
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

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn]);

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


// 4.4 // 4.5
import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks";
import { logIn } from "../../redux/auth/operations";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const { isAuthError, isLoggedIn } = useAuth();
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/');
        }
    }, [isLoggedIn]);

    const handleLogin = () => dispatch(logIn({ email, password }));
    
    return (
        <div style={{margin: 50}}>
            <div>Login</div>
            <input 
                type="email" 
                placeholder="Please enter your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            /> <br/>
            <input 
                type="password" 
                placeholder="Please enter your password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            /> <br/>
            {isAuthError && <div>Error occured during login. Email or Password is incorrect</div>}
            <button onClick={handleLogin}>Login</button> <br/> <br/>
            <button onClick={() => navigate('/signup')}>Go to register!</button>
        </div>
    );
}

export default LoginPage;













// 5.1
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

// Persisting token field from auth slice to localstorage
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);






// 5.2
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);






// 5.3
export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
      // Reading the token from the state via getState()
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
  
      if (persistedToken === null) {
        // If there is no token, exit without performing any request
        return thunkAPI.rejectWithValue('Unable to fetch user');
      }
  
      try {
        // If there is a token, add it to the HTTP header and perform the request
        setAuthHeader(persistedToken);
        const res = await axios.get('/users/me');
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
);






// 5.4
import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, refreshUser } from './operations';

const initialState = {
    user: { name: null, email: null },
    token: null,
    isAuthError: false,
    isLoggedIn: false,
    isRefreshing: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
      [register.fulfilled](state, action) {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isAuthError = false;
      },
      [register.rejected](state, _action) {
        state.isAuthError = true;
      },
      [logIn.fulfilled](state, action) {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isAuthError = false;
      },
      [logIn.rejected](state, _action) {
        state.isAuthError = true;
      },
      [refreshUser.pending](state) {
        state.isRefreshing = true;
      },
      [refreshUser.fulfilled](state, action) {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      },
      [refreshUser.rejected](state) {
        state.isRefreshing = false;
      },
    },
});

export const authReducer = authSlice.reducer;









// 5.5
useEffect(() => {
    dispatch(refreshUser());
}, [dispatch]);


