import React from 'react';
// 1.
import { ThemeContext } from '../../App';

function FunctionalComponent() {
    // 2.
    const darkTheme = React.useContext(ThemeContext);
    
    
    const themeStyles = {
        padding: '50px',
        margin: '50px',
        color: darkTheme ? 'white' : 'gray',
        backgroundColor: darkTheme ? 'gray' : 'white',
        fontSize: 20
    }

    return (
        <div style={themeStyles}>I am functional component block</div>
    )
}

export default FunctionalComponent;
