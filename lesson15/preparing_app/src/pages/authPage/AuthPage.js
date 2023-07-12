import {useState, useRef} from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { register } from '../../redux/auth/operations';

function AuthPage() {
    const [authType, setAuthType] = useState('login');
    const dispatch = useDispatch();
    const loginEmailRef = useRef();
    const loginPwdRef = useRef();
    const registerEmailRef = useRef();
    const registerPwdRef = useRef();
    const registerUsernameRef = useRef();

    const handleLogin = () => {
        const email = loginEmailRef.current.value;
        const password = loginPwdRef.current.value;
        console.log({ email, password });
        dispatch(logIn({ email, password }));
    }

    const handleSignup = () => {
        const email = registerEmailRef.current.value;
        const password = registerPwdRef.current.value;
        const name = registerUsernameRef.current.value;
        dispatch(register({ email, password, name }));
        console.log({ email, password, name });
    }
    

    if (authType === 'login') {
        return <div>
            <div>Login</div>
            <input ref={loginEmailRef} type='text' placeholder='Enter email' /> <br/>
            <input ref={loginPwdRef} type='text' placeholder='Enter password' /> <br/>
            <button onClick={handleLogin}>Login</button> <br/>
            <button onClick={() => setAuthType('register')}>Go to Register</button>
        </div>
    }

    if (authType === 'register') {
        return <div>
            <div>Register</div>
            <input ref={registerUsernameRef} type='text' placeholder='Enter username' /> <br/>
            <input ref={registerEmailRef} type='text' placeholder='Enter email' /> <br/>
            <input ref={registerPwdRef} type='text' placeholder='Enter password' /> <br/>
            <button onClick={handleSignup}>Register</button> <br/>
            <button onClick={() => setAuthType('login')}>Go to Login</button>
        </div>
    };
}

export default AuthPage;