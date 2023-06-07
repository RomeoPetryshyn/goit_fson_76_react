import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/users';

export const getUsers = async () => {
    const { data } = await axios.get(url);
    return data;
}

export const postUser = async (userData) => {
    const { data } = await axios.post(url, userData);
    return data;
}

export const putUser = async (userData) => {
    const { data } = await axios.put(url, userData);
    return data;
}

export const deleteUser = async () => {
    const { data } = await axios.delete(url);
    return data;
}