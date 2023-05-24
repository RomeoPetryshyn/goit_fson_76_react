import React from "react";

class Header extends React.Component {
    render() {
        const { title } = this.props;
        // const title = this.props.title;

        return (
            <div>I am header {title}</div>
        )
    }
}

export default Header;