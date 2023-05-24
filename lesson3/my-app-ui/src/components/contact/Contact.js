import { Component } from "react";

class Contact extends Component {
    // WAY 1 WITH BIND
    // constructor(props) {
    //     super(props);
    //     // 1 this.methodName = this.methodName.bind(this)
    //     this.contactUsHandler = this.contactUsHandler.bind(this);
    // }

    // contactUsHandler(event) {
    //     console.log(event);
    //     // 2
    //     console.log(this);
    //     console.log("Contacting user", this.props.userName);
    // }

    // WAY 2 WITHOUT BIND
    contactUsHandler = () => {
        console.log(this);
        console.log("Contacting user", this.props.userName);
        // 
        const { hideContactFormHandler } = this.props;
        hideContactFormHandler();
    }

    render() {
        return (
            <div>
                <button onClick={this.contactUsHandler}>Contact us</button>
            </div>
        )
    }
}

export default Contact;