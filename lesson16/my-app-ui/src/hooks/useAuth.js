import { useSelector } from 'react-redux';
import {
    selectUser,
    selectIsLoggedIn,
    selectIsAuthError,
    selectIsRefreshing,
    selectIsLoading
} from './../redux/auth/selectors';

export const useAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const user = useSelector(selectUser);
    const isAuthError = useSelector(selectIsAuthError);
    const isRefreshing = useSelector(selectIsRefreshing);
    const isLoading = useSelector(selectIsLoading);
    
    return {
      isLoggedIn,
      isAuthError,
      isRefreshing,
      isLoading,
      user,
    };
};