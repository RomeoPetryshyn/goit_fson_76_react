import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks";
import { register } from "../../redux/auth/operations";
import { useState, useEffect } from "react";
import PasswordStrengthBar from 'react-password-strength-bar';
import { useNavigate } from "react-router-dom";

function RegisterPage() {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const { isAuthError, isLoggedIn } = useAuth();
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/');
        }
    }, [isLoggedIn]);

    const handleSignup = () => dispatch(register({ email, password, name }));
    
    return (
        <div style={{margin: 50}}>
            <div>Sign up</div>
            <input 
                type="text" 
                placeholder="Please enter your name"
                value={name}
                onChange={(event) => setName(event.target.value)}
            /> <br/>
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
            <div style={{width: 150}}><PasswordStrengthBar password={password} /></div>
            {isAuthError && <div>Error occured during signup. Email or Password is incorrect</div>}
            <button onClick={handleSignup}>Sign up</button> <br/> <br/>
            <button onClick={() => navigate('/login')}>Go to login!</button>
        </div>
    );
}

export default RegisterPage;