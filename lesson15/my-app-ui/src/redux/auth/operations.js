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