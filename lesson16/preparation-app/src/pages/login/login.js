import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks";
import { logIn } from "../../redux/auth/operations";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const { isAuthError, isLoggedIn } = useAuth();
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/');
        }
    }, [isLoggedIn]);

    const handleLogin = () => dispatch(logIn({ email, password }));
    
    return (
        <div style={{margin: 50}}>
            <div>Login</div>
            <input 
                type="email" 
                placeholder="Please enter your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            /> <br/>
            <input 
                type="password" 
                placeholder="Please enter your password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            /> <br/>
            {isAuthError && <div>Error occured during login. Email or Password is incorrect</div>}
            <button onClick={handleLogin}>Login</button> <br/> <br/>
            <button onClick={() => navigate('/signup')}>Go to register!</button>
        </div>
    );
}

export default LoginPage;
