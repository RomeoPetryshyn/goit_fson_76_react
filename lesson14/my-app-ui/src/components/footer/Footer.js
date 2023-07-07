import { useSelector } from "react-redux";
import { selectColorTheme } from "../../redux/colorThemes/selectors";

function Footer() {
    const colorScheme = useSelector(selectColorTheme);
    const style = {
        width: 400,
        height: 100,
        color: colorScheme === 'light' ? 'black' : 'white',
        backgroundColor: colorScheme === 'light' ? 'white' : 'black',
    }

    return <div style={style}>
        I am Footer
    </div>
}

export default Footer;