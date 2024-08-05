import React, { useState, useContext } from 'react';
import AuthContext from '../context/auth/authContext';

const Signup = () => {
    const [credentials, setCredentials] = useState({name: "", email: "", password: ""});
    const {name, email, password} = credentials;
    const context = useContext(AuthContext);
    const { signUp } = context;

    const handleSubmit = async (e) => {
        e.preventDefault();
        signUp(name, email, password);
    }

    const onChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    }

    return (
        <div className="container my-3">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={name} 
                    onChange={onChange} minLength={3} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" value={email} 
                    onChange={onChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={password} 
                    onChange={onChange} minLength={5} required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Signup
