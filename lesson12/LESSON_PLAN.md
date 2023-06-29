## План заняття

1. Kahoot i питання.
2. Розглянемо навіщо потрібен redux toolkit. Переглянемо код з попереднього заняття щоб звернути уваги на його однотипність і на базі наших спостережень обговоримо в чому основна задача redux toolkit.
3. Створимо новий додаток по нашому шаблону
   1. Додамо конпоненти Header, Content i Footer з базовою розміткою.
4. Розглянемо роботу redux tooltik на прикладі нашого невеликого додатку:
   1. Встановимо npm install @reduxjs/toolkit && npm install react-redux (для доступу до комбінування редьюсерів) а також оновимо наш index.js щоб підключити провайдер
   2. Будемо переробляти наш приклад з попереднього заняття використовуючи @reduxjs/toolkit
      1. Додамо ту саму структуру директорій, з файлами reducers.js, store.js, colorThemes/
      2. Переробимо наш store.js використовуючи @reduxjs/toolkit
            import { configureStore } from "@reduxjs/toolkit";
            import appReducers from './reducers';
            export const store = configureStore({reducer: appReducers});
      3. Переробимо наш reducers.js (якщо доведеться :D) щоб можна було скористатись appReducers
      4. Переробимо наші екшени в /redux/colorThemes/actions.js використовуючи createAction
            import { createAction } from "@reduxjs/toolkit";
            export const setColorTheme = createAction(SET_COLOR_THEME);
      5. Переробимо /redux/colorThemes/reducer.js використовуючи екшини створені через createAction а також використовуючи createReducer
            import { createReducer } from "@reduxjs/toolkit";
            import { setColorTheme } from "./actions";
            export const colorThemesReducer = createReducer(defaultState, {
                  [setColorTheme]: (state, action) => ({
                        ...state,
                        colorTheme: action.payload,
                  })
            });
      6. Додамо селектор для отримання нашого глобального стану
            export const getColorTheme = state => state.themes.colorTheme;
      7. Оновимо компоненти Header, Footer, Content для роботи з нашим глобальним станом і його зміною.
      

   



