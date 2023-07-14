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
        console.log('Refreshing');
        state.isRefreshing = true;
      },
      [refreshUser.fulfilled](state, action) {
        console.log('done');
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

