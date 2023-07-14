import { useAuth } from '../../hooks/index';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';

function Content() {
    const {
        user: { name, email }
    } = useAuth();

    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logOut());
    }

    return <div>
        <div>I am Content component.</div>
        <div>You name is: {name}</div>
        <div>You email is: {email}</div>
        <div>
            <button onClick={handleLogout}>Log out</button>
        </div>
    </div>
}

export default Content;
