import React from 'react';

class UserInfo extends React.Component {

    render() {
        const { name, phone, email, website } = this.props;

        return (
            <div>
                <div>Name: {name}</div>
                <div>Email: {email}</div>
                <div>Phone: {phone}</div>
                <div>Website: {website}</div>
                <br /> <br /> <br /> <br />
            </div>
        )
    }
}

export default UserInfo;