import React, { createContext, useEffect, useReducer } from 'react'
import { auth, db } from '../firebase';
import faker from 'faker';
import profileReducer, { CLEAR_PROFILE, SET_PROFILE, ERROR, IS_FETCHING } from '../reducers/profile';
const Users = db.collection('users');

export const initialState = {
  user: {
    id: '',
    displayName: '',
    username: '',
    following: [],
    followers: [],
    email: '',
    emailVerified: null,
  },
  isAuth: false,
  isFetching: false,
}

export const ProfileContext = createContext({})

const ProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(profileReducer);

  const signOut = async () => {
    await auth.signOut();
    dispatch({
      type: CLEAR_PROFILE
    })
  }

  const setUser = async () => {
    dispatch({
      type: IS_FETCHING
    })
    let user = {};
    const { uid, displayName, email, photoURL, phoneNumber, emailVerified, isAnonymous } = auth.currentUser

    const snapshot = await Users.doc(uid).get();

    if (snapshot.exists) {
      user = {
        id: snapshot.id,
        ...snapshot.data()
      }
    } else {
      if (isAnonymous) {
        user = {
          uid,
          displayName: faker.name.findName(),
          username: faker.name.firstName(),
          avatar: 'https://gravatar.com/avatar/fc2e138321e1a579e919902be761c7fa?s=400&d=robohash&r=x',
          isAnonymous,
          bio: faker.lorem.paragraph(),
          following: [],
          followers: [],
          createdAt: Date.now()
        }
      } else {
        user = {
          uid,
          displayName,
          username: email.split('@')[0],
          email,
          avatar: photoURL,
          phoneNumber,
          emailVerified,
          followers: [],
          following: [],
          createdAt: Date.now()
        }
      }
      await Users.doc(uid).set(user);
    }

    dispatch({
      type: SET_PROFILE,
      payload: user
    })
  }

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setUser()
      } else {
        signOut()
      }
    })
  }, [auth.currentUser])

  const value = {
    ...state,
    signOut,
  }

  return (
    <ProfileContext.Provider value={value}>
      {children}
    </ProfileContext.Provider>
  )
}

export default ProfileProvider
