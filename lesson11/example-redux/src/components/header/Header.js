import { useSelector } from "react-redux";
import { getColorThemes } from "../../redux/colorThemes/selectors";

function Header() {
    const colorTheme = useSelector(getColorThemes);
    console.log(colorTheme);

    return <div style={{width: 400, height: 100}}>
        I am Header
    </div>
}

export default Header;