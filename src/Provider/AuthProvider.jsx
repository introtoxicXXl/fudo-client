import { PropTypes } from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from './../Utility/Firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import useAxios from './../Hooks/useAxios';

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const axiosPublic = useAxios();
    const [user, setUser] = useState(true);
    const [loading, setLoading] = useState(true);


    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signup = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const google = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    const updateUser = user => {
        console.log(user)
        return updateProfile(auth.currentUser, {
            displayName: user.name
        })
    }




    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                const userInfo = { email: currentUser.email }
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token)
                            setLoading(false);
                        }
                    })
            } else {
                localStorage.removeItem('access-token')
                setLoading(false);
            }
        })
        return () => {
            unsubscribe();
        }
    }, [axiosPublic])
    const authInfo = {
        user,
        loading,
        login,
        signup,
        google,
        updateUser,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;