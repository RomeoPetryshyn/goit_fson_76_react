import { useSelector } from "react-redux";
import { getColorTheme } from "../../redux/colorThemes/selectors";
import { getLanguage } from "../../redux/language/selectors";

function Footer() {
    const colorScheme = useSelector(getColorTheme);
    const language = useSelector(getLanguage);

    const style = {
        width: 400,
        height: 100,
        color: colorScheme === 'light' ? 'black' : 'white',
        backgroundColor: colorScheme === 'light' ? 'white' : 'black'
    }

    return <div style={style}>
        I am Footer. Language: {language}
    </div>
}

export default Footer;