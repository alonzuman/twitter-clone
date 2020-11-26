import firebase from 'firebase';
import React, { createContext, useEffect, useReducer } from "react";
import { auth, db } from '../firebase';
import authReducer, { IS_FETCHING } from "../reducers/auth";
import { IS_UPDATING, SIGNED_OUT, SET_USER } from '../reducers/auth';
const Users = db.collection('users');

const initialState = {
  isFetching: false,
  isFetched: false,
  isUpdating: false,
  isUpdated: false,
  user: {}
}

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      dispatch({
        type: IS_FETCHING
      })
      if (user) {
        setUser(user.uid)
      } else {
        dispatch({
          type: SIGNED_OUT
        })
      }
    })
  }, [auth.currentUser])

  const setUser = async (uid) => {
    Users.doc(uid).get().then(snapshot => {
      const user = {
        id: snapshot.id,
        ...snapshot.data()
      };
      dispatch({
        type: SET_USER,
        payload: user
      })
    })
  }

  const signInWithProvider = async (provider) => {
    dispatch({
      type: IS_FETCHING
    })

    const firebaseProvider = () => {
      switch (provider) {
        case 'facebook': return new firebase.auth.FacebookAuthProvider();
        case 'google': return new firebase.auth.GoogleAuthProvider();
        default: return null
      }
    }

    await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(async () => {
      const { user: { uid, displayName, email, photoURL: avatar, phoneNumber, emailVerified } } = await auth.signInWithPopup(firebaseProvider());

      const userSnapshot = await Users.doc(uid).get();
      if (!userSnapshot.exists) {
        await Users.doc(uid).set({ uid, displayName, email, photoURL: avatar, phoneNumber, emailVerified }, { merge: true })
      }

      dispatch({
        type: SET_USER,
        payload: {
          uid: userSnapshot.id,
          ...userSnapshot.data()
        }
      })
    }).catch(err => console.log(err))
  }

  const signOut = async () => {
    await auth.signOut();
    dispatch({
      type: SIGNED_OUT
    })
  }

  const value = {
    signInWithProvider,
    signOut,
    ...state,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
