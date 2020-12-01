import React, { createContext, useReducer } from 'react'
import { db } from '../firebase';
import messagesReducer, { SET_ALL, IS_FETCHING, SET_MESSAGES, ERROR, SET_ONE } from '../reducers/messages';
const Chats = db.collection('chats');

export const initialState = {
  isFetching: false,
  isFetched: false,
  chats: {},
}

export const MessagesContext = createContext({});

const MessagesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(messagesReducer);

  const getChats = (uid) => {
    dispatch({
      type: IS_FETCHING
    })
    Chats.where('participants', 'array-contains', uid).orderBy('updatedAt', 'desc').onSnapshot(snapshot => {
      let data = {}
      snapshot.docs.forEach(doc => {
        return data = {
          ...data,
          [doc.id]: { ...doc.data() }
        }
      })
      dispatch({
        type: SET_ALL,
        payload: data
      })
    })
  }

  const getChatMessages = (chatId) => {
    dispatch({
      type: IS_FETCHING
    })

    Chats.doc(chatId).get().then(snapshot => {
      if (snapshot.exists) {
        Chats.doc(chatId).collection('messages').orderBy('createdAt', 'asc').onSnapshot(snapshot => {
          const messages = snapshot.docs.map(doc => { return { id: doc.id, ...doc.data() } })
          dispatch({
            type: SET_MESSAGES,
            payload: {
              id: chatId,
              messages
            }
          })
        })
      }
    })
  }

  const startChat = (sender, receiver) => {
    Chats.where('participants', 'array-contains', [sender.uid, receiver.uid]).get().then(snapshot => {
      if (!snapshot.exists) {
        const chatId = `${sender.uid}-${receiver.uid}`;
        Chats.doc(chatId).set({
          createdAt: Date.now(),
          participants: [sender.uid, receiver.uid],
          participantsData: [sender, receiver],
          updatedAt: Date.now()
        })
      }
    }).catch(err => console.log(err))
  }

  const sendMessage = (sender, chatId, content) => {
    Chats.doc(chatId).set({
      updatedAt: Date.now()
    }, { merge: true });
    Chats.doc(chatId).collection('messages').add({
      createdAt: Date.now(),
      content,
      sender,
      read: []
    }).catch(err => console.log(err))
  }

  const value = {
    getChats,
    getChatMessages,
    sendMessage,
    startChat,
    ...state
  }

  return (
    <MessagesContext.Provider value={value}>
      {children}
    </MessagesContext.Provider>
  )
}

export default MessagesProvider
