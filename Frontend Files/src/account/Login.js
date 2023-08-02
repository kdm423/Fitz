import React, { useState } from'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './homepage.css';

// Reusable form for register and login forms
// (email, username, password)
const InputForm = ({ type, placeholder, value, onChange }) => {
    return (
        <input 
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(event) => onChange(event.target.value)}
        />
    );
};

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            if (isRegistering) {
                await axios.post('http://localhost:4000/register', { email, username, password });
                alert('Registration successful');
                setIsRegistering(false);
            } else {
                await axios.post('http://localhost:4000/login', { username, password });
                alert('Login successful');

                onLogin({username});
                navigate(`/profile/${username}`);
            }
        } catch (error) {
            alert(isRegistering ? 'Error registering user' : 'Invalid credentials');
        }
    };

    return (
        <div className="loginFormat">
            Fitz
            {isRegistering && (
            <InputForm
                type = "email"
                placeholder  = "enter email"
                value = {email}
                onChange = {setEmail}
            />
            )}
            <InputForm
                type = "text"
                placeholder  = "enter username"
                value = {username}
                onChange = {setUsername}
            />
            <InputForm
                type = "password"
                placeholder  = "enter password"
                value = {password}
                onChange = {setPassword}
            />

            <button onClick = {handleSubmit}>{isRegistering ? 'Register' : 'Login'}</button>

            <button onClick = {() => setIsRegistering(!isRegistering)}>
                {isRegistering ? 'Back to Login' : 'New User? Register here'}
            </button>
        </div> 
    );
};

export default Login;