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
  reducers: {
    deletePostItem(state, action) {
        const itemId = action.payload;
        state.items = state.items.filter(({ id }) => {
            return id !== itemId;
        });
    }
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

export const { deletePostItem } = postsSlice.actions;
export const postsReducer = postsSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const postsSlice = createSlice({
//     name: "posts",
//     // items: state.posts.items,
//     // isLoading: state.posts.isLoading,
//     // error: state.posts.error
//     initialState: {
//       items: [],
//       isLoading: false,
//       error: null,
//     },
//     reducers: {
//       fetchingInProgress(state) {
//         state.isLoading = true;
//       },
//       fetchingSuccess(state, action) {
//         state.isLoading = false;
//         state.error = null;
//         state.items = action.payload;
//       },
//       fetchingError(state, action) {
//         state.isLoading = false;
//         state.items = [];
//         state.error = action.payload;
//       },
//     },
// });

// export const { fetchingInProgress, fetchingSuccess, fetchingError } = postsSlice.actions;
// export const postsReducer = postsSlice.reducer;
