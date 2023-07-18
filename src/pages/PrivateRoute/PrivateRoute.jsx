import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

const PrivateRoute = ({children}) => {
    const {isLoading} = useContext(AuthContext);
    const location = useLocation();
    if(isLoading){
        return "Loading......"
    }
    
    const { user } = useContext(AuthContext);
    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to='/login'></Navigate>
};

export default PrivateRoute;