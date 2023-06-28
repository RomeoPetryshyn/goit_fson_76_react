import { SET_LANGUAGE } from "./types";

export const setLanguage = (value) => {
    return {
        type: SET_LANGUAGE,
        payload: value,
    }
};