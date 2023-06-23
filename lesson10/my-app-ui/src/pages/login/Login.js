import { useState, useRef } from 'react';

function Login({ loginUserFunc }) {
    const loginRef = useRef();
    const passwordRef = useRef();

    const handleLogin = () => {
        const loginValue = loginRef.current.value;
        const passwordValue = passwordRef.current.value;
        if (passwordValue === '123' && loginValue === 'jake') {
            loginUserFunc();
        }
    }
    
    return <>
        <div style={{margin: 10}}>Login to see your home page</div>
        <input ref={loginRef} style={{margin: 10}} type='text' placeholder='Enter Login' />
        <input ref={passwordRef} style={{margin: 10}} type='password' placeholder='Enter Password' />
        <button onClick={handleLogin}>Login</button>
    </>
};

export default Login;