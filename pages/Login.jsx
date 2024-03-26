import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { loginUser } from '../api';

export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: '', password: '' });
    const [status, setStatus] = React.useState('idle');
    const [error, setError] = React.useState(null);
    const location = useLocation();
    const from = location.state?.from?.pathname || "/host"
    const navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
        async function login() {
            setStatus('submitting');
            setError(null)
            try {
                const response = await loginUser(loginFormData);
                console.log(response)
                localStorage.setItem("loggedIn", true)
                navigate(from, {replace: true})
            } catch (error) {
                setError(error.message);
                localStorage.removeItem("loggedIn")
            } finally {
                setStatus('idle');
            }
        }
        login();
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setLoginFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }
    const message = location.state?.message || '';
    return (
        <div className='login-container'>
            {message && <h3 className='login-first'>{message}</h3>}
            <h1>Sign in to your account</h1>
            {error && <h3 className='login-error'>{error}</h3>}
            <form onSubmit={handleSubmit} className='login-form'>
                <input
                    name='email'
                    onChange={handleChange}
                    type='email'
                    placeholder='Enter mitso@gmail.com to continue'
                    value={loginFormData.email}
                />
                <input
                    name='password'
                    onChange={handleChange}
                    type='password'
                    placeholder='Enter 123 to continue'
                    value={loginFormData.password}
                />
                <button className='login-button' disabled={status === 'submitting' ? true : false}>
                    {status === "submitting" ? "Logging in..." : "Log in"}
                </button>
            </form>
        </div>
    );
}
