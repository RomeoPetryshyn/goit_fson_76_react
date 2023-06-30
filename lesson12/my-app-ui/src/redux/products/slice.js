import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: 'products',
    initialState: [
        { name: 'Potato', price: 20 },
        { name: 'Tomato', price: 10 },
        { name: 'Onion', price: 15 },
        { name: 'Cucumber', price: 30 },
        { name: 'Cabage', price: 5 },
        { name: 'Banana', price: 45 },
        { name: 'Dragon fruit', price: 35 }
    ],
    reducers: {
        addProduct(state, action) {
            return [...state, action.payload];
        },
        deleteProduct(state, action) {
            return state.filter(({ name }) => name !== action.payload.name)
        }
    }
});

export const addProduct = productsSlice.actions.addProduct;
export const deleteProduct = productsSlice.actions.deleteProduct;

export const productsReducer = productsSlice.reducer;
