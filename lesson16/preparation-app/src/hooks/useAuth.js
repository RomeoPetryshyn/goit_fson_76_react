import { useSelector } from 'react-redux';
import {
    selectUser,
    selectIsLoggedIn,
    selectIsAuthError
} from './../redux/auth/selectors';

export const useAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const user = useSelector(selectUser);
    const isAuthError = useSelector(selectIsAuthError);
    
    return {
      isLoggedIn,
      isAuthError,
      user,
    };
};