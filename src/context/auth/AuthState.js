import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AlertContext from '../alert/alertContext';
import AuthContext from '../auth/authContext';

const AuthState = (props) => {
    const navigate = useNavigate();
    const context = useContext(AlertContext);
    const { showAlert } = context;

    // User Login
    const logIn = async (email, password) => {
        // API Call
        const response = await fetch(process.env.REACT_APP_LOGIN_API_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({email, password})
          });
        const json = await response.json();
        console.log(json);
        if(json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            showAlert("Logged in Successfully", "success");
            navigate('/');
        } 
        else {
            showAlert("Invalid credentials", "danger");
        }
    }

    // User SignUp
    const signUp = async (name, email, password) => {
        // API Call
        const response = await fetch(process.env.REACT_APP_SIGNUP_API_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({name, email, password})
          });
        const json = await response.json();
        console.log(json);
        if(json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            showAlert("Logged in Successfully", "success");
            navigate('/');
        } 
        else {
            showAlert("Invalid credentials", "danger");
        }
    }


    return (
        <AuthContext.Provider value={{logIn, signUp}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState
