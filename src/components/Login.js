import React, { useState, useContext } from 'react';
import AuthContext from '../context/auth/authContext';

const Login = () => {
    const [credentials, setCredentials] = useState({email: "", password: ""});
    const context = useContext(AuthContext);
    const { logIn } = context;
    const {email, password} = credentials;

    const handleSubmit = async (e) => {
        e.preventDefault();
        logIn(email, password);
    }

    const onChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    }

    return (
        <div className="container my-3">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" value={email} 
                    onChange={onChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={password} 
                    onChange={onChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login
