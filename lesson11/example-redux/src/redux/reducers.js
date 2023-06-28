import { combineReducers } from 'redux';
import { colorThemesReducer } from './colorThemes/reducer';

export default (state, action) => {
    return appReducer(state, action);
};
            
const appReducer = combineReducers({
    themes: colorThemesReducer,
});