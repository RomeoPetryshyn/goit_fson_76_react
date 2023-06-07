import React, { useState, useEffect } from 'react';
import UserInfo from '../userInfo/UserInfo';
import LoadingBar from '../loadingBar/LoadingBar';
import ErrorWrapper from '../../pages/errorWrapper/ErrorWrapper';
import { getUsers } from '../../api/jsonPlaceholderApi';

function UsersList() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setTimeout(async () => {
            try {
                const loadedUsers = await getUsers();
                setUsers(loadedUsers);
            } catch(error) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }, 5000);
    }, []);

    useEffect(() => {
        // code
    }, [isError]);

    useEffect(() => {
        // code
    }, [isLoading]);

    if (isLoading) {
        return <>
            <LoadingBar />
        </>
    }
    
    return <ErrorWrapper isError={isError}>
        {users.map(({ name, phone, email, website, id }) => {
            return <UserInfo 
                key={`user-info-item-${id}`} 
                name={name} 
                phone={phone} 
                email={email} 
                website={website} 
            />
        })}
    </ErrorWrapper>; 
}

export default UsersList;
