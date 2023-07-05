// slice
import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
    name: "posts",
    initialState: {
      items: [],
      isLoading: false,
      error: null,
    },
    reducers: {
      fetchingInProgress(state) {
        state.isLoading = true;
      },
      fetchingSuccess(state, action) {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      },
      fetchingError(state, action) {
        state.isLoading = false;
        state.error = action.payload;
      },
    },
});

export const { fetchingInProgress, fetchingSuccess, fetchingError } = postsSlice.actions;
export const postsReducer = postsSlice.reducer;

// operations
import axios from "axios";
import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from "./slice";
axios.defaults.baseURL = "https://jsonsdasplaceholder.typicode.com";
export const fetchPosts = () => async dispatch => {
  try {
    // Індикатор завантаження
    dispatch(fetchingInProgress());
    // HTTP-запит
    const response = await axios.get("/posts");
    // Обробка даних
    dispatch(fetchingSuccess(response.data));
  } catch (e) {
    console.log(e);
    // Обробка помилки
    dispatch(fetchingError(e.message));
  }
};

// store
import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./posts/slice";

export const store = configureStore({reducer: {
    posts: postsReducer
}});

// selector
export const getPosts = (state) => ({items: state.posts.items, isLoading: state.posts.isLoading, error: state.posts.error});




















// createAsyncThunk

// operations
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

export const fetchPosts = createAsyncThunk("posts/fetchAll", async () => {
  const response = await axios.get("/posts");
  return response.data;
});

// slice
import { createSlice } from "@reduxjs/toolkit";
// Імпортуємо операцію
import { fetchPosts } from "./operations";
const postsSlice = createSlice({
  name: "posts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  // Додаємо обробку зовнішніх екшенів
  extraReducers: {
    [fetchPosts.pending](state, action) {
      state.isLoading = true;
    },
    [fetchPosts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchPosts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const postsReducer = postsSlice.reducer;
