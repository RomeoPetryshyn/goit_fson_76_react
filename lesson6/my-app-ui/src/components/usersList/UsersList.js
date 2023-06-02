import React from 'react';
import axios from 'axios';
import UserInfo from '../userInfo/UserInfo';
import LoadingBar from '../loadingBar/LoadingBar';
import ErrorWrapper from '../../pages/errorWrapper/ErrorWrapper';
import { getUsers } from '../../api/jsonPlaceholderApi';

class UsersList extends React.Component {
    state = {
        users: [],
        isLoading: true,
        isError: false,
    }
    
    async componentDidMount() {
        // setTimeout для наочності. В реальності він не потрібен
        setTimeout(async () => {

            

            try {
                const users = await getUsers();
                // const users = getUsers(); // результат PROMISE (нам таке не підходить, нам потрібні дані!)
                console.log(users);
                this.setState({ users });

                // const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
                // this.setState({ users: data });
                
                // throw new Error('Тестуємо що буде коли трапиться помилка');
            } catch(error) {
                this.setState({ isError: true });
                console.error(error);
            } finally {
                this.setState({ isLoading: false });
            }



        }, 5000);
    }

    // componentDidUpdate(prevProps, prevState) {
    //     const newUsers = this.state.users;
    //     const oldUsers = prevState.users;
    //     if (JSON.stringify(newUsers) !== JSON.stringify(oldUsers)) {
    //         this.setState({ isLoading: false });
    //     }
    // }

    render() {
        const { users, isLoading, isError } = this.state;

        if (isLoading) {
            return <LoadingBar />
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
}

export default UsersList;





// componentDidUpdate() {
    //     console.log({ state: this.state });
    // }

        // componentDidMount() {
        //     this.getUsersData().then(data => console.log(data));
        // }
    
        // getUsersData = async () => {
        //     try {
        //         const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
        //         return data;
        //     } catch(error) {
        //         console.error(error);
        //         return [];
        //     }
            
        // }