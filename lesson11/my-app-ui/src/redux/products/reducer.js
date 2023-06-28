import { 
    ADD_PRODUCT,
    DELETE_PRODUCT,
    UPDATE_PRODUCT
} from "./types";

const defaultState = [
    { name: 'Potato', price: 20 },
    { name: 'Tomato', price: 10 },
    { name: 'Onion', price: 15 },
    { name: 'Cucumber', price: 30 },
    { name: 'Cabage', price: 5 },
    { name: 'Banana', price: 45 },
    { name: 'Dragon fruit', price: 35 }
];

export const productsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_PRODUCT: {
            return [...state, action.payload]
        }
        case DELETE_PRODUCT: {
            return state.filter(({ name }) => name !== action.payload.name)
        }
        case UPDATE_PRODUCT: {
            return state.reduce((accumulator, existingProduct) => {
                if (existingProduct.name === action.payload.name) {
                    accumulator.push(action.payload);
                    return accumulator;
                }
                accumulator.push(existingProduct);
                return accumulator;
            }, []);
        }
        default:
            return state;
    }
}


    