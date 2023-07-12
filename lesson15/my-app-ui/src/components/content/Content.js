import { useAuth } from '../../hooks/index';

function Content() {
    const {
        user: { name, email }
    } = useAuth();

    return <div>
        <div>I am Content component.</div>
        <div>You name is: {name}</div>
        <div>You email is: {email}</div>
    </div>
}

export default Content;
