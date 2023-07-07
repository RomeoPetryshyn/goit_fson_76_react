import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: 'products',
    initialState: [
        { name: 'Potato', price: 20, type: 'vegetable', origin: 'UA', amount: 2 },
        { name: 'Apple', price: 12, type: 'fruit', origin: 'UK', amount: 12 },
        { name: 'Tomato', price: 10, type: 'vegetable', origin: 'UA', amount: 32 },
        { name: 'Onion', price: 15, type: 'vegetable', origin: 'UA', amount: 9 },
        { name: 'Lemon', price: 25, type: 'fruit', origin: 'SP', amount: 23 },
        { name: 'Cucumber', price: 30, type: 'vegetable', origin: 'UA', amount: 18 },
        { name: 'Cabage', price: 5, type: 'vegetable', origin: 'UA', amount: 16 },
        { name: 'Banana', price: 45, type: 'fruit', origin: 'IT', amount: 7 },
        { name: 'Dragon fruit', price: 35, type: 'fruit', origin: 'FR', amount: 14 },
        { name: 'Lime', price: 32, type: 'fruit', origin: 'SP', amount: 20 },
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
