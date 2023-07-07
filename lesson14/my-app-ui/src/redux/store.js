import { configureStore } from "@reduxjs/toolkit";
import { colorThemesReducer } from "./colorThemes/slice";
import { languageReducer } from "./language/slice";
import { productsReducer } from "./products/slice";

export const store = configureStore({reducer: {
    themes: colorThemesReducer,
    language: languageReducer,
    products: productsReducer
}});