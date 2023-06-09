import React from 'react';
import UserInfo from '../userInfo/UserInfo';
import { UsersContext } from '../../App';

function UsersList() {
    const users = React.useContext(UsersContext);
    console.log(users, 'I am users list component');

    return users.map(({ name, phone, email, website, id }) => {
        return <UserInfo 
            key={`user-info-item-${id}`} 
            name={name} 
            phone={phone} 
            email={email} 
            website={website} 
        />
    })
}

export default UsersList;