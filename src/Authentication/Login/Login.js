import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Context/AuthProvider/useAuth/useAuth';
import initializeAuthentication from '../../Firebase/Firebase.init';
import Button from '@restart/ui/esm/Button';
import { Alert, CircularProgress } from '@mui/material';

initializeAuthentication()

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, setUser, saveUserInfo, loginUser, signInWithGoogle, loading, error } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const redirect_uri = location.state?.from || '/';

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user
                saveUserInfo(user.email, user.displayName, 'PUT')
                history.push(redirect_uri)

            })
    }

    return (
        <Container>
            <div className="font">
                <form onSubmit={handleLoginSubmit}>
                    <label htmlFor="email"><b>Email</b></label>
                    <input onBlur={handleOnChange} type="text" placeholder="Enter Email" name="email" id="email" required />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input onBlur={handleOnChange} type="password" placeholder="Enter Password" name="password" id="psw" required />
                    {loading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Login successfully!</Alert>}
                    {error && <Alert severity="error">{error}</Alert>}

                    <button type="submit" className="registerbtn">Login</button>

                    <Link style={{ textDecoration: 'none' }} to="/register">
                        New User? Please Register
                    </Link>

                </form>
                <h6 style={{ textAlign: 'center', color: 'blue', marginTop: '20px' }}>OR SIGN IN USING GOOGLE</h6>
                <hr />
                <div style={{ textAlign: 'center', alignItems: 'center' }} >
                    <button className="btn-primary font" onClick={handleGoogleSignIn} ><i className="fab fa-google">    <span className="font mx-3">Log in Using Google</span></i></button>
                </div>
            </div >
        </Container >
    );
};

export default Login