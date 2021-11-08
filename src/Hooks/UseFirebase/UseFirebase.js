import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../../Firebase/Firebase.init';


initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const auth = getAuth();



    const handleGoogleSignIn = () => {

        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .finally(() => setLoading(false))
            .then((result) => {
                const user = result.user;
                setUser(user)
                // ...
            }).catch((error) => {
                setError(error.message);

            });

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
        handleGoogleSignIn,
        handleLogOut,
        error

    }



}

export default useFirebase;