import { configureStore } from "@reduxjs/toolkit";
import { colorThemesReducer } from "./colorThemes/reducer";
import { languageReducer } from "./language/reducer";

export const store = configureStore({reducer: {
    themes: colorThemesReducer,
    language: languageReducer
}});