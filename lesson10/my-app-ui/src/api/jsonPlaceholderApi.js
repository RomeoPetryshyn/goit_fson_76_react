import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/posts';
// const baseUrl = 'https://moviesDomain.com';

// export const getTrending = async () => {
//     const requestUrl = `${baseUrl}/trending/get-trending`;
//     const { data } = await axios.get(requestUrl);
//     return data;
// }

// export const getMovieDetails = async (movieId) => {
//     const requestUrl = `${baseUrl}/movies/get-movie-details/${movieId}`;
//     const { data } = await axios.get(requestUrl);
//     return data;
// }

export const getPosts = async () => {
    const { data } = await axios.get(url);
    return data;
}

export const getPost = async (postId) => {
    const { data } = await axios.get(`${url}/${postId}`);
    return data;
}