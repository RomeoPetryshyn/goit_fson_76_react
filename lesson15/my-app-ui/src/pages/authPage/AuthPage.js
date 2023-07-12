import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { register } from '../../redux/auth/operations';
import PasswordStrengthBar from 'react-password-strength-bar';

function AuthPage() {
    const [pageType, setPageType] = useState('login'); // register or login
    const [password, setPassword] = useState('');

    console.log(password);

    const loginEmailRef = useRef();
    const loginPasswordRef = useRef();
    const registerEmailRef = useRef();
    const registerPasswordRef = useRef();
    const registerNameRef = useRef();

    const dispatch = useDispatch();

    const handleLogin = () => {
        const email = loginEmailRef.current.value;
        const password = loginPasswordRef.current.value;
        dispatch(logIn({ email, password }));
    }

    const handleSignup = () => {
        const email = registerEmailRef.current.value;
        const password = registerPasswordRef.current.value;
        const name = registerNameRef.current.value;
        dispatch(register({ email, password, name }));
    }

    if (pageType === 'login') {
        return <div style={{margin: 50}}>
            <div>Login</div>
            <input ref={loginEmailRef} type="email" placeholder="Enter your email" /> <br/>
            <input 
                ref={loginPasswordRef} 
                type="password" 
                placeholder="Enter your password" 
                onChange={(event) => {setPassword(event.target.value)}}
                value={password}
            /> <br/>
            <PasswordStrengthBar password={password} />
            <button onClick={handleLogin}>Login</button> <br/> <br/>
            <button onClick={() => setPageType('register')}>Go to register!</button>
        </div>
    }

    if (pageType === 'register') {
        return <div style={{margin: 50}}>
            <div>Register</div>
            <input ref={registerNameRef} type="text" placeholder="Enter your name" /> <br/>
            <input ref={registerEmailRef} type="email" placeholder="Enter your email" /> <br/>
            <input ref={registerPasswordRef} type="password" placeholder="Enter your password" /> <br/>
            <button onClick={handleSignup}>Sign up</button> <br/> <br/>
            <button onClick={() => setPageType('login')}>Go to login!</button>
        </div>
    }
}

export default AuthPage;