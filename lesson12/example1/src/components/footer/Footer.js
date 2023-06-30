import { useSelector } from "react-redux";

function Footer() {
    const colorScheme = useSelector(state => state.themes.colorTheme);
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