import React from 'react';

function UserInfo({ name, phone, email, website }) {
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

export default UserInfo;