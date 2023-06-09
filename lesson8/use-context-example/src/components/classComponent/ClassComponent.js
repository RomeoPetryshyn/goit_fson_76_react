import React from "react";
import { ThemeContext } from "../../App";

class ClassComponent extends React.Component {
    getBlockStyles(isDarkTheme) {
        return {
            padding: '50px',
            margin: '50px',
            color: isDarkTheme ? 'white' : 'gray',
            backgroundColor: isDarkTheme ? 'gray' : 'white',
            fontSize: 20
        }
    }

    render() {

        return (
            <ThemeContext.Consumer>
                {
                    (darkTheme) => {
                        return <div style={this.getBlockStyles(darkTheme)}>I am class component block</div>
                    }
                }
            </ThemeContext.Consumer>
        )
    }
}

export default ClassComponent;
