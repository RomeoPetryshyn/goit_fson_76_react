import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setColorTheme } from "../../redux/colorThemes/actions";
import { getColorTheme } from "../../redux/colorThemes/selectors";

function Content() {
    const colorScheme = useSelector(getColorTheme);
    const style = {
        width: 400,
        height: 100,
        color: colorScheme === 'light' ? 'black' : 'white',
        backgroundColor: colorScheme === 'light' ? 'white' : 'black'
    }

    const dispatch = useDispatch();
    const handleThemeSwitch = () => {
        dispatch(setColorTheme(colorScheme === 'light' ? 'dark' : 'light'));
    }

    return <div style={style}>
        <div>I am Content</div>
        <br/>
        <button onClick={handleThemeSwitch}>Switch color theme</button>
    </div>
}

export default Content;