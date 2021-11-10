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

    // const handleRegisterUser = (email, password, name) => {

    //     const auth = getAuth();
    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then((userCredential) => {
    //             setUser(userCredential.user)
    //         })
    //         .catch((error) => {
    //             setError(error.message);

    //         });
    // }

    // const handleLogIn = (email, password) => {
    //     signInWithEmailAndPassword(auth, email, password)
    //         .then((userCredential) => {
    //             setUser(userCredential.user);
    //         })
    //         .catch((error) => {
    //             setError(error.message);
    //         });
    // }
    const registerUser = (email, password, name, history) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
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
    }, [])


    return {
        user,
        signInWithGoogle,
        handleLogOut,
        error,
        loading,
        registerUser,
        loginUser

    }



}

export default useFirebase;