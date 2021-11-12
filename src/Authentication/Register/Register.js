import { Alert, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../Context/AuthProvider/useAuth/useAuth';
import './Register.css'
import Header from '../../Shared/Header/Header'
import Footer from '../../Shared/Footer/Footer'

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, loading, error } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {

        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        // {!loading && <form onSubmit={handleLoginSubmit}>
        <div className="font">
            <Header></Header>
            <form onSubmit={handleLoginSubmit} >
                <div class="container">
                    <h1>Register</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr />

                    <label htmlFor="text"><b>Your Name</b></label>
                    <input onBlur={handleOnBlur} type="text" placeholder="Enter Name" name="name" id="name" required />

                    <label htmlFor="email"><b>Email</b></label>
                    <input onBlur={handleOnBlur} type="text" placeholder="Enter Email" name="email" id="email" required />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input onBlur={handleOnBlur} type="password" placeholder="Enter Password" name="password" id="psw" required />
                    <hr />
                    <div>
                        <p>By creating an account you agree to our <Link style={{ textDecoration: 'none' }} to="/">Terms & Privacy</Link>.</p>
                        <div className="container signin">
                            {loading && <CircularProgress />}
                            {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                            {error && <Alert severity="error">{error}</Alert>}
                        </div>
                        <button type="submit" className="registerbtn">Register</button>
                    </div>
                    <p>Already have an account? < Link style={{ textDecoration: 'none' }} to="/login">Login now</Link>.</p>

                </div>
            </form>
            <Footer></Footer>
        </div>
    );
};

export default Register;