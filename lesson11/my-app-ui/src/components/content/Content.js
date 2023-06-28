import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setColorTheme } from "../../redux/colorThemes/actions";
import { getColorTheme } from "../../redux/colorThemes/selectors";
import { setLanguage } from "../../redux/language/actions";
import { getLanguage } from "../../redux/language/selectors";

function Content() {
    const colorScheme = useSelector(getColorTheme);
    const style = {
        width: 400,
        height: 100,
        color: colorScheme === 'light' ? 'black' : 'white',
        backgroundColor: colorScheme === 'light' ? 'white' : 'black'
    }
    
    const language = useSelector(getLanguage);

    const dispatch = useDispatch();
    const handleThemeSwitch = () => {
        dispatch(setColorTheme(colorScheme === 'light' ? 'dark' : 'light'));
    }
    const handleLanguageSwitch = () => {
        dispatch(setLanguage(language === 'ua' ? 'en' : 'ua'));
    }

    return <div style={style}>
        <div>I am Content</div>
        <div>Language: {language}</div>
        <br/>
        <button onClick={handleThemeSwitch}>Switch color theme</button>
        <button onClick={handleLanguageSwitch}>Switch language</button>
    </div>
}

export default Content;