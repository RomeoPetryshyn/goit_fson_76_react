import { combineReducers } from 'redux';
import { colorThemesReducer } from './colorThemes/reducer';
const appReducer = combineReducers({
    themes: colorThemesReducer,
});
export default (state, action) => {
    return appReducer(state, action);
};