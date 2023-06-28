cd lesson11 && cd my-app-ui && npm install - з терміналу щоб почати роботу з прикладами в цьому уроці

## План заняття

1. Kahoot i питання.
2. Теорія: розглянемо поняття управління станом по конспекту. Обговоримо що таке action, reducer, store, state. 
3. Створимо реакт додаток з redux (наочний додаток, тримає в собі стан colorTheme):
   1. Створимо новий реакт додаток по шаблону
   2. Встановимо бібліоткеку redux, react-redux а також встановимо як dev-dependency бібліотеку  npm install @redux-devtools/extension: npm i redux && npm i react-redux && npm i @redux-devtools/extension --save-dev
   3. Відтворимо необхідну структуру директорій:
      - redux
         - colorThemes
            - actions.js
            - reducer.js
            - selectors.js
         - store.js
   4. Створимо store в src/redux/store.js де initialState = { themes: { colorTheme: 'light' } }
   5. Зв'язуємо наш store з нашими компонентами в index.js.
   6. Додамо @redux-devtools/extension в наш redux/store.js і перевіряємо чи встановили розширення для роботи з redux.
         import { devToolsEnhancer } from "@redux-devtools/extension";
         const enhancer = devToolsEnhancer();
         export const store = createStore(rootReducer, enhancer);
   7. Створимо декілька компонентів:
      - Header
      - Content
      - Footer
      В кожному з цих компонентів підпишимось на глобальний стейт використовуючи import { useSelector } from "react-redux"; const colorTheme = useSelector(state => state.themes.colorTheme); Подивимось як виглядає наш глобальний стейт і яким чином ми його дістаємо в кожному окремому компоненті
      Застилізуємо наші компоненті в залежності від теми яка вибрана.
   8. Винесемо функцію для отримання стейту в окремий селектор src/redux/colorThemes/selectors.js
      export const getColorThemes = state => state.themes.colorTheme; 
      Перевикористаємо це в наших компонентах. const colorTheme = useSelector(getColorThemes);
   9. Розглянемо як нам змінювати цей глобальний стейт з одного з наших компонентів:
      1. Створимо кнопку в компоненті Content при натисканні на яку будемо викликати хендлер-функцію
      2. Створимо action завдяки якому ми будемо створювати подію зміни стану (+розглянемо як він працює)
         export const setColorTheme = (value) => ({
            type: 'SET_COLOR_THEME',
            payload: value,
         });
      3. Використаємо useDispatch для виклику конкретного екшина
         import { useDispatch } from "react-redux";
         const dispatch = useDispatch();
         dispatch(setColorTheme(colorTheme));
      4. Додамо редьюсер для зміни нашого глобального стану src/redux/colorThemes/reducer.js
            const defaultState = {
               colorTheme: 'light'
            }
            export const colorThemesReducer = (state = defaultState, action) => {
               switch (action.type) {
                  case 'SET_COLOR_THEME':
                     return {
                     ...state,
                     colorTheme: action.payload,
                  };
               }
            }
      5. Враховуючи те що ми хочемо щоб в нашому redux в нас був доступ до глобального стейту для різних значень і цілей, використаємо combineReducers щоб мати можливість скомбінувати декілька редьюсерів
         1. Додамо файл src/redux/reducers де ми зможемо комбінувати декілька редьюсерів в один
            import { combineReducers } from 'redux';
            import { colorThemesReducer } from './colorThemes/reducer';
            export default (state, action) => {
               return appReducer(state, action);
            };
            const appReducer = combineReducers({
               themes: colorThemesReducer,
            });
         2. Відмодифікуємо наш store.js щоб він міг працювати з обєднаними редьюсерами
            import { createStore } from "redux";
            import { devToolsEnhancer } from "@redux-devtools/extension";
            import appReducers from './reducers';
            const enhancer = devToolsEnhancer();
            export const store = createStore(appReducers, enhancer);
      

   



