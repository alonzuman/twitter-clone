import firebase from 'firebase';
import { db } from '../firebase';
import React, { createContext, useEffect, useState } from 'react';

export const TweetsContext = createContext({});

const TweetsProvider = ({ children }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [tweets, setTweets] = useState([]);
  const [content, setContent] = useState('')
  const [tweet, setTweet] = useState({
    displayName: 'Alon Zuman',
    username: '@alonzuman',
    createdAt: Date.now(),
    likes: []
  })

  useEffect(() => {
    setTweet({
      ...tweet,
      content
    })
  }, [content])

  const addTweet = async () => {
    try {
      await db.collection('tweets').add(tweet);
      setContent('');
      setIsAdding(false);
    } catch (error) {
      console.log(error)
    }
  }

  const deleteTweet = async tweetId => {
    try {
      await db.collection('tweets').doc(tweetId).delete();
    } catch (error) {
      console.log(error)
    }
  }

  const likeTweet = async tweetId => {
    try {
      await db.collection('tweets').doc(tweetId).set({
        likes: firebase.firestore.FieldValue.arrayUnion('id')
      }, { merge: true })
    } catch (error) {
      console.log(error)
    }
  }

  const unlikeTweet = async (tweetId) => {
    try {
      await db.collection('tweets').doc(tweetId).set({
        likes: firebase.firestore.FieldValue.arrayRemove('id')
      }, { merge: true })
    } catch (error) {
      console.log(error)
    }
  }

  const fetchTweets = async () => {
    setIsFetching(true);
    try {
      db.collection('tweets').onSnapshot(snapshot => {
        setTweets(snapshot.docs
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .map(doc => {
            return {
              id: doc.id,
              ...doc.data()
            }
          })
        )
      })
      setIsFetching(false);
    } catch (error) {
      console.error(error);
      setIsFetching(false);
    }
  }

  const value = {
    isAdding,
    setIsAdding,
    addTweet,
    deleteTweet,
    likeTweet,
    unlikeTweet,
    tweets,
    content,
    setContent,
    fetchTweets,
    isFetching,
  }
  return (
    <TweetsContext.Provider value={value}>
      {children}
    </TweetsContext.Provider>
  )
}

export default TweetsProvider;
