import { SET_LANGUAGE } from "./types";

const defaultState = {
    language: 'ua'
}

export const languageReducer = (state = defaultState, action) => {
    switch (action.type) {
       case SET_LANGUAGE:
          return {
          ...state,
          language: action.payload,
       }
       default:
        return state;
    }
}
    