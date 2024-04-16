import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from 'prop-types';
import auth from './../firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);
    const [data, setData] = useState([]);
    const [reload, setReload] = useState(false);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    //! Create User:
    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //! Login:
    const loginUser = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //! Google Login:
    const googleLogin = () => {
        setLoader(true);
        return signInWithPopup(auth, googleProvider);
    }

    //! Github Login:
    const githubLogin = () => {
        setLoader(true);
        return signInWithPopup(auth, githubProvider);
    }

    //! Logout User:
    const logoutUser = () => {
        setLoader(true);
        return signOut(auth);
    }

    //! Observer:
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoader(false);
            console.log('observer :', currentUser);
        })
        return () => {
            unsubscribe();
        }
    }, [reload]);

    //* api data:
    useEffect(() => {
        fetch('/estate.json')
         .then(res => res.json())
         .then(i => setData(i))
    },[]);

    const authInfo = {
        user,
        setUser,
        loader,
        data,
        setReload,
        createUser,
        loginUser,
        googleLogin,
        githubLogin,
        logoutUser,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children:PropTypes.node
}