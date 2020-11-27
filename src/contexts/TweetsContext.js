import firebase from 'firebase';
import { db } from '../firebase';
import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';
import tweetsReducer, { IS_ADDING } from '../reducers/tweets';
import { SET_TWEETS, IS_FETCHING, DIALOG_CLOSED, DIALOG_OPEN, EDIT_TWEET } from '../reducers/tweets';
import { AuthContext } from './AuthContext';
import { fetchCollectionOnce, listenToCollection } from '../hooks/firestore';
const Tweets = db.collection('tweets');

const initialState = {
  isFetching: false,
  isFetched: false,
  isAdding: false,
  isAdded: false,
  dialogOpen: false,
  tweets: [],
  newTweet: {
    displayName: '',
    username: '',
    content: '',
    createdAt: Date.now(),
    avatar: '',
    likes: []
  }
}

export const TweetsContext = createContext({});

const TweetsProvider = ({ children }) => {
  const { uid, user: { displayName, avatar, username } } = useContext(AuthContext);
  const [state, dispatch] = useReducer(tweetsReducer, initialState);

  const fetchTweets = ({ queryParams }) => {
    dispatch({
      type: IS_FETCHING
    })

    listenToCollection({ queryParams, collection: 'tweets', action: dispatch, type: SET_TWEETS }).catch(err => {
      console.log(err)
    })
  }

  const editTweet = e => {
    dispatch({
      type: EDIT_TWEET,
      payload: {
        content: e.target.value
      }
    })
  }

  const addTweet = async () => {
    dispatch({
      type: IS_ADDING
    })
    const { newTweet } = state;
    await Tweets.add({
      ...newTweet,
      username,
      uid,
      displayName,
      avatar,
    });
    dispatch({
      type: EDIT_TWEET,
      payload: {
        content: ''
      }
    })
    closeDialog();
  }

  const deleteTweet = async (id) => {
    await Tweets.doc(id).delete()
  }

  const openDialog = () => {
    dispatch({ type: DIALOG_OPEN })
  };

  const closeDialog = () => {
    dispatch({ type: DIALOG_CLOSED })
  };

  const likeTweet = async (id, uid) => {
    await Tweets.doc(id).set({
      likes: firebase.firestore.FieldValue.arrayUnion(uid)
    }, { merge: true })
  }

  const unlikeTweet = async (id, uid) => {
    await Tweets.doc(id).set({
      likes: firebase.firestore.FieldValue.arrayRemove(uid)
    }, { merge: true })
  }

  const value = {
    fetchTweets,
    editTweet,
    addTweet,
    deleteTweet,
    openDialog,
    closeDialog,
    likeTweet,
    unlikeTweet,
    ...state,
  }

  // useEffect(() => {
  //   if (process.env.NODE_ENV !== 'production') {
  //     console.log('tweetsReducer change: ', state)
  //   }
  // }, [state])

  return (
    <TweetsContext.Provider value={value}>
      {children}
    </TweetsContext.Provider>
  )
}

export default TweetsProvider;
