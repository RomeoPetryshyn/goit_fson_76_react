import { useSelector } from "react-redux";
import { getColorThemes } from "../../redux/colorThemes/selectors";

function Footer() {
    const colorTheme = useSelector(getColorThemes);
    console.log(colorTheme);

    return <div style={{width: 400, height: 100}}>
        I am Footer
    </div>
}

export default Footer;