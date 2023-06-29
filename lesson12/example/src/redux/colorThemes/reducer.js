import { setColorTheme } from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const defaultState = {
    colorTheme: 'light'
}

export const colorThemesReducer = createReducer(defaultState, {
    [setColorTheme]: (state, action) => ({
            ...state,
            colorTheme: action.payload,
    })
});
    