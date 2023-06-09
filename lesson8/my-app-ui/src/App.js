import React from 'react';
import UsersList from './components/usersList/UsersList';
import { getUsers } from './api/jsonPlaceholderApi';
import LoadingBar from './components/loadingBar/LoadingBar';

export const UsersContext = React.createContext();

function App() {
  const [isError, setIsError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [users, setUsers] = React.useState([]);


  React.useEffect(() => {
    setTimeout(async () => {
        try {
            const loadedUsers = await getUsers();
            setUsers(loadedUsers);
        } catch(error) {
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    }, 3000);
  }, []);

  if (isLoading) {
    return <LoadingBar />
  }

  if (isError) {
    return 'Error happened';
  }

  console.log(users);

  return (
    <UsersContext.Provider value={users}>
      <UsersList />
    </UsersContext.Provider>
  );
}

export default App;
