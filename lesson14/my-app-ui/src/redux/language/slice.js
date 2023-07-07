import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name: 'language',
    initialState: {
        language: 'en'
    },
    reducers: {
        setLanguage(state, action) {
            return { ...state, language: action.payload };
        }
    }
});

export const setLanguage = languageSlice.actions.setLanguage;

export const languageReducer = languageSlice.reducer;