import React from 'react';
import { createContext } from 'react';
import app from '../firebase/firebase.config';
export const  AuthContext = createContext();
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { useState } from 'react';
import { useEffect } from 'react';

const auth = getAuth(app);

const AuthProviders = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState();
    const createUser =(email, password) => createUserWithEmailAndPassword(auth, email, password);
    const updateUserProfileData = (name,imgUrl) =>{
        return (
            updateProfile(auth.currentUser,{
                displayName: name , photoURL: imgUrl
            }).then(()=>{
                console.log('Profile Updated');
                // to clear the form 
                
            }).catch(error => console.log(error.message))
        )
    }
    // to log in or sign in 
    const logIn = (email, password) => signInWithEmailAndPassword(auth, email, password)

    // to log out 
    const logOut = () =>{
        signOut(auth)
        .then()
        .catch(error => console.log(error.message))
    }

    // get current user 
    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setIsLoading(false);
         })
         return ()=> unsubscribe;
    },[])

    
        

    const authInfo = {
            createUser,
            updateUserProfileData,
            logIn,
            logOut,
            user,
            isLoading,
    }
    return (
        <AuthContext.Provider  value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;