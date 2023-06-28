import { combineReducers } from 'redux';
import { colorThemesReducer } from './colorThemes/reducer';
import { languageReducer } from './language/reducer';
import { productsReducer } from './products/reducer';
const appReducer = combineReducers({
    themes: colorThemesReducer,
    languages: languageReducer,
    products: productsReducer
});
export default (state, action) => {
    return appReducer(state, action);
};