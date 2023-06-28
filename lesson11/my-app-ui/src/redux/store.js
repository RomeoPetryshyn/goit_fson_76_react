import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import appReducers from './reducers';

const enhancer = devToolsEnhancer();

export const store = createStore(appReducers, enhancer);















// import { createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import { SET_COLOR_THEME } from "./colorThemes/types";

// const initialState = { 
//     themes: { 
//         colorTheme: 'light' 
//     } 
// };

// const rootReducer = (state = initialState, action) => {
//     console.log({ action });
//     switch (action.type) {
//         case SET_COLOR_THEME: 
//             return {
//                 ...state,
//                 themes: {
//                     colorTheme: action.payload
//                 }
//             }
//         default:
//             return state;
//     }
// };

// const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhancer);
