import React from 'react';
import { postUser } from '../../api/jsonPlaceholderApi';

class ContactUs extends React.Component {
    
    async handleFormSubmit(event) {
        event.preventDefault();
        const { phone, name, email, website } = event.target.elements;
        const phoneValue = phone.value;
        const nameValue = name.value;
        const emailValue = email.value;
        const websiteValue = website.value;
        console.log({ phoneValue, nameValue, emailValue, websiteValue });
        const requestBody = {
            phone: phoneValue,
            email: emailValue,
            name: nameValue,
            website: websiteValue
        }
        await postUser(requestBody);
    }
    
    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <input placeholder='name' type="text" name="name" />
                <input placeholder='phoneNumber' type="tel" name="phone" />
                <input placeholder='email' type="email" name="email" />
                <input placeholder='website' type="text" name="website" />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default ContactUs;