import React, { createContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../firebase.config';


export const AuthProvider = createContext();
const auth = getAuth(app)

const ContextProvider = ({children}) => {
    const [user, setUser] = useState();
    const createAccout =(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const value = {
        user,
        createAccout,
    }
    return (
        <AuthProvider.Provider value={value}>
            {children}
        </AuthProvider.Provider>
    );
};

export default ContextProvider;