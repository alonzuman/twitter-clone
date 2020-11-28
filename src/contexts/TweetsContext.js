import firebase from 'firebase';
import { db } from '../firebase';
import React, { createContext, useReducer } from 'react';
import tweetsReducer, { ADD_TWEET, IS_ADDING, NEW_REPLY_DIALOG_CLOSED, NEW_REPLY_DIALOG_OPEN, SET_TWEETS, IS_FETCHING, NEW_TWEET_DIALOG_CLOSED, NEW_TWEET_DIALOG_OPEN } from '../reducers/tweets';
import { listenToCollection, listenToDocument } from '../utils/firestore';
const Tweets = db.collection('tweets');

const initialState = {
  isFetching: false,
  isFetched: false,
  isAdding: false,
  isAdded: false,
  newTweetDialogOpen: false,
  newReplyDialogOpen: false,
  tweets: {
    all: [],
    currentTweet: {},
    currentTweetReplies: [],
    currentUserTweets: []
  }
}

export const TweetsContext = createContext({});

const TweetsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tweetsReducer, initialState);

  const fetchTweets = ({ queryParams, key, ...rest }) => {
    dispatch({
      type: IS_FETCHING
    })

    listenToCollection({ queryParams, collection: 'tweets', dispatch, type: SET_TWEETS, key, ...rest }).catch(err => {
      console.log(err)
    })
  }

  const fetchTweet = (id) => {
    dispatch({
      type: IS_FETCHING
    })

    listenToDocument({ collection: 'tweets', id, dispatch, type: SET_TWEETS, key: 'currentTweet' }).catch(err => {
      console.log(err)
    })
  }

  const addTweet = async (tweet) => {
    dispatch({
      type: IS_ADDING
    })
    const isReply = tweet.repliedTo;
    await Tweets.add(tweet);

    dispatch({
      type: ADD_TWEET
    })
    closeNewTweetDialog();
    if (isReply) {
      Tweets.doc(tweet.repliedTo).update({
        replies: firebase.firestore.FieldValue.increment(1)
      })
      closeNewReplyDialog();
    }
  }

  const deleteTweet = async (tweet) => {
    if (tweet.repliedTo) {
      await Tweets.doc(tweet.repliedTo).update({
        replies: firebase.firestore.FieldValue.increment(-1)
      })
    }
    await Tweets.doc(tweet.id).delete()
  }

  const openNewTweetDialog = () => {
    dispatch({
      type: NEW_TWEET_DIALOG_OPEN,
    })
  };

  const closeNewTweetDialog = () => {
    dispatch({ type: NEW_TWEET_DIALOG_CLOSED })
  };

  const openNewReplyDialog = (currentTweet) => {
    dispatch({
      type: NEW_REPLY_DIALOG_OPEN,
      payload: currentTweet,
    })
  }

  const closeNewReplyDialog = () => {
    dispatch({
      type: NEW_REPLY_DIALOG_CLOSED
    })
  }

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
    fetchTweet,
    addTweet,
    deleteTweet,
    openNewTweetDialog,
    closeNewTweetDialog,
    openNewReplyDialog,
    closeNewReplyDialog,
    likeTweet,
    unlikeTweet,
    ...state,
  }

  return (
    <TweetsContext.Provider value={value}>
      {children}
    </TweetsContext.Provider>
  )
}

export default TweetsProvider;
