import { useSelector } from "react-redux";

function Header() {
    const colorScheme = useSelector(state => state.themes.colorTheme);
    const style = {
        width: 400,
        height: 100,
        color: colorScheme === 'light' ? 'black' : 'white',
        backgroundColor: colorScheme === 'light' ? 'white' : 'black',
    }
    
    return <div style={style}>
        I am Header
    </div>
}

export default Header;