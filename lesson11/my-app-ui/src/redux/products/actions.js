import { ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from "./types";

export const addProduct = (product) => ({
    type: ADD_PRODUCT,
    payload: product,
});

export const deleteProduct = (product) => ({
    type: DELETE_PRODUCT,
    payload: product,
});

export const updateProduct = (product) => ({
    type: UPDATE_PRODUCT,
    payload: product
})