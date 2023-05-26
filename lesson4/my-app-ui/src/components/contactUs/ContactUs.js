import React from 'react';

class ContactUs extends React.Component {
    
    handleFormSubmit(event) {
        event.preventDefault();
        console.log(event);
        const { phone, username } = event.target.elements;
        const phoneValue = phone.value;
        const usernameValue = username.value;
        console.log({ phoneValue, usernameValue });
    }
    
    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <input placeholder='userName' type="text" name="username" />
                <input placeholder='phoneNumber' type="tel" name="phone" />
                <button type="submit">Login</button>
            </form>
        )
    }
}

export default ContactUs;