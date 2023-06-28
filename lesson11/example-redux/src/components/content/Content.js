import { useSelector } from "react-redux";
import { getColorThemes } from "../../redux/colorThemes/selectors";
import { useDispatch } from "react-redux";
import { setColorTheme } from "../../redux/colorThemes/actions";


function Content() {
    const colorTheme = useSelector(getColorThemes);
    console.log({ colorTheme });
    
    const dispatch = useDispatch();
    const switchColorThemeHandler = () => {
        console.log('I am called');
        dispatch(setColorTheme(colorTheme === 'light' ? 'dark' : 'light'));
    }
    


    return <div style={{width: 400, height: 100}}>
        <div>I am Content</div>
        <br/><br/>
        <button onClick={switchColorThemeHandler}>Switch color theme</button>
    </div>
}

export default Content;