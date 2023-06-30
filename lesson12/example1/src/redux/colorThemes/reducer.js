import { createReducer } from "@reduxjs/toolkit";
import { setColorTheme } from "./actions";

const defaultState = {
    colorTheme: 'light'
}

export const colorThemesReducer = createReducer(defaultState, {
    [setColorTheme]: (state, action) => ({
          ...state,
          colorTheme: action.payload,
    })
});