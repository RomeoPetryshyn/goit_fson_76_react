## План заняття

1. Kahoot i питання.
2. Хвилинка теорії: пригадаємо що таке HTTP запити і які в них є логічні складові. Обговоримо 3 основні етапи які відбувається при завантаженні даних (в тому числі і в контексті redux): Завантаження, Відображення/Помилка. 
3. Створимо новий додаток по нашому шаблону
   1. Додамо конпоненти Header, Content i Footer з базовою розміткою і підключимо їх у App.js
4. Спробуємо на прикладі розібрати асинхронне налаштування redux:
   1. Налаштуємо базовий redux з використання toolkit:
      1. npm install @reduxjs/toolkit react-redux
      2. Створимо директорію redux, де створимо store.js з поки що пустим редьюсером
            import { configureStore } from "@reduxjs/toolkit";
            export const store = configureStore({reducer: {}});
      3. Обгорнемо наш <App/> у <Provider store={store}/> в нашому index.js
   2. Створимо і розберемо posts слайс в середині директорії redux (example.js) і додамо редьюсер в наш store
   3. Обговоримо що таке operations і додамо їх для обробки асинхронних операцій (example.js)
   4. Додамо також селектор для отримання всіх станів операції по завантаженню постів
         export const getPosts = (state) => ({items: state.posts.items, isLoading: state.posts.isLoading, error: state.posts.error});
   4. Додамо асинхронне завантаження в наш component Content:
         const dispatch = useDispatch();
         const { items, isLoading, error } = useSelector(getPosts);
         useEffect(() => {
            dispatch(fetchPosts());
         }, [dispatch]);
5. Спробуємо переналаштувати все використовуючи createAsyncThunk (перед тим розглянувши що це таке)
   1. Перепишемо наші operations з використанням createAsyncThunk (example)
   2. Перепишемо наш slice з використанням нових operations
      

   



