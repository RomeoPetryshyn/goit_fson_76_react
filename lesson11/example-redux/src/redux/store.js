import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import appReducers from './reducers';

const enhancer = devToolsEnhancer();

export const store = createStore(appReducers, enhancer);
