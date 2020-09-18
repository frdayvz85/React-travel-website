import React, { useState } from 'react'
import '../../App.css';
import { Link } from 'react-router-dom';

export default function Login() {
    const [state, setState] = useState({
        username:'',
        password:''
    })

    const handleChange = (e) => {
        const {id, value} = e.target;

        setState(prevState =>({
            ...prevState, [id]: value
        }))
    }
    const loginForm = (e) => {
        e.preventDefault();
        alert(`${state.username}, You are logged...`)
    }
    return  (
        <div className="login">
        <h1 className="login-header">Login</h1>
            <form action="" className="login-form" onSubmit={loginForm}>
                <div className="form-group">
                    <label htmlFor="username">Username or Email</label>
                    <input type="text" 
                        placeholder="Username or email" 
                        id="username"
                        value={state.username}
                        onChange={handleChange}
                        autoFocus/>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Password</label>
                    <input 
                        type="password" 
                        placeholder="Password" 
                        id="password"
                        value={state.password}
                        onChange={handleChange}
                        autoFocus/>
                </div>
                <div className="form-forgot-link">
                    <a href="#" className="forgot-password">Forgot password?</a>
                </div>
                <div className="form-btn">
                <Link to='/sign-up' className="login-link">Don't have account?</Link>
                <button className="login-btn">Login</button>
                </div>
            </form>
        </div>
    );
}

