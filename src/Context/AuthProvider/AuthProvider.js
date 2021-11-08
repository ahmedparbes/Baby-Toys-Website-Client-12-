import React, { createContext } from 'react';
import useFirebase from '../../Hooks/UseFirebase/UseFirebase';

export const authContext = createContext()

const AuthProvider = ({ children }) => {

    const all = useFirebase()
    return (
        <authContext.Provider value={all}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;