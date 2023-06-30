import { createReducer } from "@reduxjs/toolkit";
import { setLanguage } from "./actions";

const defaultState = {
    language: 'en'
}

export const languageReducer = createReducer(defaultState, {
    [setLanguage]: (state, action) => ({
          ...state,
          language: action.payload,
    })
});