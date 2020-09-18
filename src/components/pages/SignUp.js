import React, { useState } from 'react';
import '../../App.css'

export default function SignUp() {
    const [state , setState] = useState({
        username : "",
        password : "",
        password2 : ""
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const registerForm = (e) => {
        e.preventDefault();
        alert(`${state.username} ,You are  registered. Thanks`)
    }
    return (
        <div className="register">
        <h1 className="register-header">Register</h1>
            <form action="" className="register-form" onSubmit={registerForm}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        id="username"
                        placeholder="Username"
                        value={state.username}
                        onChange = {handleChange}
                        autoFocus
                        />
                </div>
                <div className="form-group">
                    <label htmlFor="pass">Password</label>
                    <input 
                        type="password" 
                        id="password"
                        placeholder="Paswword"
                        value={state.password}
                        onChange = {handleChange}
                        autoFocus
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="pass2">Password again</label>
                    <input 
                        type="password" 
                        placeholder="Paswword again"
                        id="password2"
                        value={state.password2}
                        onChange = {handleChange} 
                        autoFocus
                        />
                </div>
                <div className="form-btn">
                <button className="register-btn">Register</button>
                </div>
            </form>
        </div>
    );
}