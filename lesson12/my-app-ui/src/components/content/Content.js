import { useSelector, useDispatch } from "react-redux";
import { setColorTheme } from "../../redux/colorThemes/slice";
import { setLanguage } from "../../redux/language/slice";

function Content() {
    const dispatch = useDispatch();

    const colorScheme = useSelector(state => state.themes.colorTheme);
    const style = {
        width: 400,
        color: colorScheme === 'light' ? 'black' : 'white',
        backgroundColor: colorScheme === 'light' ? 'white' : 'black',
    }
    const handleThemeSwitch = () => {
        dispatch(setColorTheme(colorScheme === 'light' ? 'dark' : 'light'));
    }

    const language = useSelector(state => state.language.language);
    const handleLanguageSwitch = () => {
        dispatch(setLanguage(language === 'en' ? 'ua' : 'en'));
    }

    const products = useSelector(state => state.products);
    console.log(products);

    return <div style={style}>
        <div>I am Content</div>
        <button onClick={handleThemeSwitch}>Switch color theme</button>
        <br/>
        <div>Language: {language}</div>
        <button onClick={handleLanguageSwitch}>Switch language</button>
        <br/><br/>
        <div style={{ marginBottom: 30 }}>{products.map(({ name, price }) => (<div>
            {name}: {price}
        </div>))}</div>
    </div>
}

export default Content;