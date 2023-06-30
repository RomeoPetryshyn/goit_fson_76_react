import { useSelector, useDispatch } from "react-redux";
import { setColorTheme } from "../../redux/colorThemes/actions";
import { setLanguage } from "../../redux/language/actions";

function Content() {
    const dispatch = useDispatch();

    const colorScheme = useSelector(state => state.themes.colorTheme);
    const style = {
        width: 400,
        height: 100,
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


    return <div style={style}>
        <div>I am Content</div>
        <button onClick={handleThemeSwitch}>Switch color theme</button>
        <br/>
        <div>Language: {language}</div>
        <button onClick={handleLanguageSwitch}>Switch language</button>
    </div>
}

export default Content;