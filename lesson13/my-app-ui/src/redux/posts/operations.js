import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { deletePostItem } from "./slice";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

export const fetchPosts = createAsyncThunk("posts/fetchAll", async (_, thunkAPI) => {
    try {
        const response = await axios.get("/posts");
        const items = response.data.slice(90)
        return items;
    } catch(error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const deletePost = (postId) => async dispatch => {
    try {
        await axios.delete(`/posts/${postId}`);
        dispatch(deletePostItem(postId));
    } catch(error) {
        console.log('Error occurred', error);
    }
}





// // operations
// import axios from "axios";
// import {
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
// } from "./slice";
// axios.defaults.baseURL = "https://jsonsdasplaceholder.typicode.com";
// export const fetchPosts = () => async dispatch => {
//   try {
//     // Індикатор завантаження
//     dispatch(fetchingInProgress());
//     // HTTP-запит
//     const response = await axios.get("/posts");
//     // Обробка даних
//     dispatch(fetchingSuccess(response.data));
//   } catch (e) {
//     console.log(e);
//     // Обробка помилки
//     dispatch(fetchingError(e.message));
//   }
// };