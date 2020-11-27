import React, { createContext, useEffect, useReducer } from 'react'
import { db } from '../firebase';
import { IS_FETCHING } from '../reducers/auth';
import usersReducer, { SET_ONE } from '../reducers/users';
const Users = db.collection('users');

export const UsersContext = createContext({});

const initialState = {
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
    Users.where('username', '==', username).get().then(snapshot => {
      snapshot.forEach((doc, index) => {
        const data = { uid: doc.id, ...doc.data() }
        dispatch({
          type: SET_ONE,
          payload: data
        })
      })
    })
  }

  useEffect(() => {
    console.log(state);
  }, [state])

  const value = {
    fetchUserByUsername,
    ...state
  }

  return (
    <UsersContext.Provider value={value}>
      {children}
    </UsersContext.Provider>
  )
}

export default UsersProvider;
