import React, { createContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase';



export const AuthProvider = createContext();
const auth = getAuth(app)


const ContextProvider = ({ children }) => {
    const [user, setUser] = useState();
    const createAccout = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const value = {
        user,
        createAccout,
        setUser,
        login
    }
    return (
        <AuthProvider.Provider value={value}>
            {children}
        </AuthProvider.Provider>
    );
};

export default ContextProvider;