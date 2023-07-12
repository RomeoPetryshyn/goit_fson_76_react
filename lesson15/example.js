// 3
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({reducer: {}});



// 4
import React from 'react';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>
);



// 5.1
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://goit-task-manager.herokuapp.com/';
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      // After successful registration, add the token to the HTTP header
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
      try {
        const res = await axios.post('/users/login', credentials);
        // After successful login, add the token to the HTTP header
        setAuthHeader(res.data.token);
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
);
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      // After a successful logout, remove the token from the HTTP header
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
});



// 5.2
import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut } from './operations';
const initialState = {
  user: { name: null, email: null },
  token: null,
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
    },
    [logIn.fulfilled](state, action) {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      },
    [logOut.fulfilled](state) {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
    },
  },
});
export const authReducer = authSlice.reducer;



// 5.3
import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from './auth/slice';
export const store = configureStore({reducer: {
    auth: authReducer
}});



// 6.1
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;



// 6.2
import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
} from './../redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  return {
    isLoggedIn,
    user,
  };
};

// 6.3
import { useAuth } from './hooks/index';
function App() {
  const {
    isLoggedIn,
    user
  } = useAuth();
  console.log({ isLoggedIn, user });
  return (
    <div>
      I am app
    </div>
  );
}
export default App;





// 7
import {useState, useRef} from 'react';

function AuthPage() {
    const [authType, setAuthType] = useState('login');
    const loginEmailRef = useRef();
    const loginPwdRef = useRef();
    const registerEmailRef = useRef();
    const registerPwdRef = useRef();
    const registerUsernameRef = useRef();

    const handleLogin = () => {
        const email = loginEmailRef.current.value;
        const password = loginPwdRef.current.value;
        console.log({ email, password });
    }

    const handleSignup = () => {
        const email = registerEmailRef.current.value;
        const password = registerPwdRef.current.value;
        const name = registerUsernameRef.current.value;
        console.log({ email, password, name });
    }
    

    if (authType === 'login') {
        return <div>
            <div>Login</div>
            <input ref={loginEmailRef} type='text' placeholder='Enter email' /> <br/>
            <input ref={loginPwdRef} type='text' placeholder='Enter password' /> <br/>
            <button onClick={handleLogin}>Login</button> <br/>
            <button onClick={() => setAuthType('register')}>Go to Register</button>
        </div>
    }

    if (authType === 'register') {
        return <div>
            <div>Register</div>
            <input ref={registerUsernameRef} type='text' placeholder='Enter username' /> <br/>
            <input ref={registerEmailRef} type='text' placeholder='Enter email' /> <br/>
            <input ref={registerPwdRef} type='text' placeholder='Enter password' /> <br/>
            <button onClick={handleSignup}>Register</button> <br/>
            <button onClick={() => setAuthType('login')}>Go to Login</button>
        </div>
    };
}

export default AuthPage;


//////////////










