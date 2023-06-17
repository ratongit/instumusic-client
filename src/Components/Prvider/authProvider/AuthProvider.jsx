import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useState } from "react";
import { useEffect } from "react";
import app from "./FireBaseCom-fig/fireBase.Config";
import axios from "axios";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProniders = ({ children }) => {

    const [user, setUser] = useState(null)

    // console.log("User  is usan",user?.email)
    // console.log("Auth is",auth)

    const [loading, setLoading] = useState(true)


    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)

    }

    const updateUseProfite = (name, photo) => {

        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo



        })
    }



    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSingIn = () => {
        setLoading(true)
        return signInWithPopup(auth, GoogleAuthProvider)
    }

    const logOut = () => {
        return signOut(auth);
    }


    // observe auth state change

    const [userEmail, setUserEmail] = useState(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)

            //  get and set token 


            setUserEmail(currentUser.email)

            const jwtEmail=currentUser.email
           
            // console.log('current user is ; ', currentUser?.email)

            if(currentUser.email){
                axios.post('https://instrument-server.vercel.app/jwt',{jwtEmail})
                .then(data=>{
                    // console.log(data.data.token)
                    localStorage.setItem('access-token',data.data.token)
                })
          }
          else{
            localStorage.removeItem('access-token')
        }

            setLoading(false);
        });
        return () => {
            unsubscribe();
        }

    }, [])

    const authInfo = {
        user,
        userEmail,
        createUser,
        signIn,
        logOut,
        loading,
        googleSingIn,
        updateUseProfite,
    }

    return (

        <AuthContext.Provider value={authInfo}>

            {children}
        </AuthContext.Provider>

    )

}

export default AuthProniders;