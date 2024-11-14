/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react"
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import app from './../../../../Firebase/firebase.config';

 // eslint-disable-next-line react-refresh/only-export-components
 export const AuthContext = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    
  // creat an account
  const creatUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login in with email and password
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // singUp with gmail
  const singUpWithGmail = () => {
    // setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };

  // singUp with github
  const singUpWithGithu = () => {
    // setLoading(true)
    return signInWithPopup(auth, githubProvider);
  };

  // logOut
  const logOut = () => {
    return signOut(auth);
  };


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
          // console.log(currentUser)
          setUser(currentUser);
          setLoading(false);
        });
    
        return () => {
          return unSubscribe();
        };
      }, []);

    const authInfo = {
       user,
       loading,
       creatUser,
       singUpWithGithu,
       singUpWithGmail,
       logOut,
       loginUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
      );
}

export default AuthProvider