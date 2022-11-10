import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from '../../../context/ContextProvider';

const PrivateRoute = ({children}) => {
    const {user, loding} = useContext(AuthProvider)
    const location = useLocation()
    if(loding){
        return <progress className="progress w-56"></progress>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;