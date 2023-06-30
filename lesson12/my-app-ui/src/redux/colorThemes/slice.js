import { createSlice } from "@reduxjs/toolkit";

const colorThemesSlice = createSlice({
    name: 'colorThemes',
    initialState: {
        colorTheme: 'light'
    },
    reducers: {
        setColorTheme(state, action) {
            return { ...state, colorTheme: action.payload };
        }
    }
});

export const setColorTheme = colorThemesSlice.actions.setColorTheme;

export const colorThemesReducer = colorThemesSlice.reducer;