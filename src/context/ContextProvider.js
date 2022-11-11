import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from '../firebase';



export const AuthProvider = createContext();
const auth = getAuth(app);


const ContextProvider = ({ children }) => {
    const [loding, setLoding] = useState(true);
    const [user, setUser] = useState(null);
    const createAccout = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email,password)=>{
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = ()=>{
        setLoding(true)
        return signOut(auth)
    }
    const signupWithGoogle = googleProvider => {
        setLoding(true)
        return signInWithPopup(auth, googleProvider)
    }
   const githubSignUp = githubProvider =>{
    setLoding(true);
    return signInWithPopup(auth, githubProvider)
   }
    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth, carrantUser =>{
              // console.log(carrantUser);
              setUser(carrantUser)
              setLoding(false)
          })
          return ()=>unsubscribe;
      },[])

    const value = {
        user,
        loding,
        createAccout,
        login,
        logOut,
        signupWithGoogle,
        githubSignUp

        
    }
    return (
        <AuthProvider.Provider value={value}>
            {children}
        </AuthProvider.Provider>
    );
};

export default ContextProvider;