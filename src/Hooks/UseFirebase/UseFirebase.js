import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../../Firebase/Firebase.init';


initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const auth = getAuth();



    const signInWithGoogle = () => {

        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
            .finally(() => setLoading(false))

            .catch((error) => {
                setError(error.message);

            });

    }

    const registerUser = (email, password, name, history) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                saveUserInfo(email, name, 'POST')
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/');
            })
            .catch((error) => {
                setError(error.message);
                console.log(error);
            })
            .finally(() => setLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }


    const handleLogOut = () => {

        signOut(auth).then(() => {
            setUser({});

        })
            .finally(() => setLoading(false))

            .catch((error) => {


            });



    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setLoading(false)
        });

        return () => unsubscribe;
    }, []);



    const saveUserInfo = (email, displayName, method) => {

        const user = { email, displayName }

        fetch('http://localhost:5000/user', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {

            })

    }


    return {
        user,
        signInWithGoogle,
        handleLogOut,
        error,
        setUser,
        loading,
        registerUser,
        loginUser,
        saveUserInfo

    }



}

export default useFirebase;