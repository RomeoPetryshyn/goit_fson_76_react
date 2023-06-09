import React from 'react';
import { UsersContext } from '../../App';

function UserInfo({ children, name, email, phone, website }) {
    const users = React.useContext(UsersContext);
    console.log(users, 'I am user info component');

    return (
        <div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>Phone: {phone}</div>
            <div>Website: {website}</div>
            <br /> <br /> <br /> <br />
        </div>
    )

    return (
        <>
            {children}
            <div>I am user info</div>
        </>
    )
}

export default UserInfo;