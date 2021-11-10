import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import useAuth from '../../Context/AuthProvider/useAuth/useAuth';
import initializeAuthentication from '../../Firebase/Firebase.init';

initializeAuthentication()

const Login = () => {

    const { handleGoogleSignIn, user, logOut } = useAuth()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);


    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }
    const handleLogin = e => {
        setIsLoading(true)
        e.preventDefault()
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUsers(result.user);
                console.log(user)
            })

            .finally(() => setIsLoading(false))

            .catch((error) => {
                setError(error.code)
                setError(error.message)

            });

    }

    return ({ isLoading },
        <Container>
            <div className="font">
                <form onSubmit={handleLogin}>
                    <div className="container">
                        <h1>Login</h1>
                        <p>Please fill in this form to Login a account.</p>
                        <hr />

                        <label htmlFor="email"><b>Email</b></label>
                        <input onBlur={handleEmail} type="text" placeholder="Enter Email" name="email" id="email" required />

                        <label htmlFor="psw"><b>Password</b></label>
                        <input onBlur={handlePassword} type="password" placeholder="Enter Password" name="psw" id="psw" required />
                        <hr />
                        {error}
                        <div>
                            <p>By creating an account you agree to our <Link to="/">Terms & Privacy</Link>.</p>
                            <button type="submit" className="registerbtn">Login</button>
                        </div>

                        <div className="container signin">
                            <p>Dont have an account? < Link to="/register">Register now</Link>.</p>
                        </div>
                    </div>
                </form>

                <div style={{ textAlign: 'center' }}>
                    <h4>Or Login Using Social Link</h4>
                    <hr />

                    <div className="font">
                        <button className="btn-primary font" onClick={handleGoogleSignIn} ><i class="fab fa-google">    <span className="font mx-3">Log in Using Google</span></i></button>
                    </div>

                </div>
            </div>
        </Container>
    );
};

export default Login;