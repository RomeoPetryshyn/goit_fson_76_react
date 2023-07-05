import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./posts/slice";

export const store = configureStore({reducer: {
    posts: postsReducer
}});