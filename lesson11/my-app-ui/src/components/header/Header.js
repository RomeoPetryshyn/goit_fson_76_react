import { useSelector } from "react-redux";
import { getColorTheme } from "../../redux/colorThemes/selectors";

function Header() {
    const colorScheme = useSelector(getColorTheme);

    const style = {
        width: 400,
        height: 100,
        color: colorScheme === 'light' ? 'black' : 'white',
        backgroundColor: colorScheme === 'light' ? 'white' : 'black'
    }

    return <div style={style}>
        I am Header
    </div>
}

export default Header;