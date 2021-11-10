import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const Register = () => {

    const [email, setEmail] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const handleEmail = e => {
        setEmail(e.target.value)
    }

    const handlePassword = e => {
        setPassword(e.target.value)
    }

    const handleDisplayName = e => {
        setDisplayName(e.target.value);

    }

    const handleRegistration = e => {
        e.preventDefault()
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                setUserName()
            })

            .catch((error) => {
                setError(error.code)
                setError(error.message)

            });

    }

    const setUserName = () => {
        const auth = getAuth();
        updateProfile(auth.currentUser, {
            displayName: displayName
        })

            .then(() => {
                // Profile updated!
                // ...
            }).catch((error) => {
                // An error occurred
                // ...
            });

    }



    return (

        <div className="font">
            <form onSubmit={handleRegistration} >
                <div class="container">
                    <h1 style={{ color: 'blue', textAlign: 'center', marginBottom: '40px' }}>Register</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr />

                    <label htmlFor="text"><b>Your Name</b></label>
                    <input onBlur={handleDisplayName} type="text" placeholder="Enter Name" name="name" id="name" required />

                    <label htmlFor="email"><b>Email</b></label>
                    <input onBlur={handleEmail} type="text" placeholder="Enter Email" name="email" id="email" required />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input onBlur={handlePassword} type="password" placeholder="Enter Password" name="psw" id="psw" required />
                    <hr />
                    <div>
                        <p>By creating an account you agree to our <Link to="/">Terms & Privacy</Link>.</p>
                        {error}
                        <button type="submit" className="registerbtn">Register</button>
                    </div>
                    <div className="container signin">
                        <p>Already have an account? < Link to="/login">Login now</Link>.</p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;