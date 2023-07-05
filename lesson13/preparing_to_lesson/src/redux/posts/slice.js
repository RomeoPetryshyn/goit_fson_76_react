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