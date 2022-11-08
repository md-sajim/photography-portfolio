import React, { createContext } from 'react';


export const AuthProvider = createContext();

const ContextProvider = ({children}) => {
    const name = {name:"sajim"}
    const value = {name}
    return (
        <AuthProvider.Provider value={value}>
            {children}
        </AuthProvider.Provider>
    );
};

export default ContextProvider;