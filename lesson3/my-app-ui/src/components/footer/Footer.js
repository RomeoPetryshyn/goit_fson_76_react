import React from 'react';
import Contact from '../contact/Contact';

export class Footer extends React.Component {
    constructor() {
        super();
        this.state = { showContact: false };
    }

    showContactFormHandler = () => {
        // this.setState({ showContact: true });
        // аналогічне наступному запису
        this.setState((prevState) => {
            console.log({prevState});
            return { showContact: true };
        }) 
    }

    hideContactFormHandler = () => {
        this.setState({ showContact: false });
    }

    render() {
        const { showContact } = this.state;
        // аналогічно з const showContact = this.state.showContact;
    
        return (
            <>
                <button onClick={this.showContactFormHandler}>Show Contact Form</button>
                {/* {showContact && (<Contact/>)} */}
                { showContact ? (
                    <Contact userName={"Jake"} hideContactFormHandler={this.hideContactFormHandler}/>
                ) : '' }
            </>
        )
    }
}