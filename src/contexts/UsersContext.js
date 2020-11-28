import React, { createContext, useReducer } from 'react'
import firebase from 'firebase';
import { db } from '../firebase';
import usersReducer, { IS_FETCHING, SET_ONE } from '../reducers/users';
const Users = db.collection('users');

export const UsersContext = createContext({});

export const initialState = {
  currentUser: {},
  users: [],
  isFetching: false,
  isFetched: false,
}

const UsersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(usersReducer, initialState);

  const fetchUserByUsername = (username) => {
    dispatch({
      type: IS_FETCHING
    })
    Users.where('username', '==', username).onSnapshot(snapshot => {
      snapshot.forEach((doc, index) => {
        const data = { uid: doc.id, ...doc.data() }
        dispatch({
          type: SET_ONE,
          payload: data
        })
      })
    })
  }

  const followUser = (followerId, followingId) => {
    Users.doc(followingId).set({
      followers: firebase.firestore.FieldValue.arrayUnion(followerId)
    }, { merge: true })
  }

  const unfollowUser = (followerId, followingId) => {
    Users.doc(followingId).set({
      followers: firebase.firestore.FieldValue.arrayRemove(followerId)
    }, { merge: true })
  }

  // useEffect(() => {
  //   if (process.env.NODE_ENV !== 'production') {
  //     console.log('usersReducer change: ', state);
  //   }
  // }, [state])

  const value = {
    fetchUserByUsername,
    followUser,
    unfollowUser,
    ...state
  }

  return (
    <UsersContext.Provider value={value}>
      {children}
    </UsersContext.Provider>
  )
}

export default UsersProvider;
