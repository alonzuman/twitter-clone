import React, { createContext, useReducer } from 'react'
import { db } from '../firebase';
import messagesReducer, { SET_ALL, IS_FETCHING, ERROR, SET_ONE, SET_ACTIVE_CHAT_ID } from '../reducers/messages';
const Chats = db.collection('chats');

export const initialState = {
  isFetching: false,
  isFetched: false,
  chats: [],
  activeChatId: ''
}

export const MessagesContext = createContext({});

const MessagesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(messagesReducer);

  const getChats = (uid) => {
    dispatch({
      type: IS_FETCHING
    })
    Chats.where('participants', 'array-contains', uid).onSnapshot(snapshot => {
      const data = snapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      })
      dispatch({
        type: SET_ALL,
        payload: data
      })
    })
  }

  const sendMessage = (sender, receiver, content) => {
    const chatId = `${sender}-${receiver}`;
    Chats.doc(chatId).get().then(snapshot => {
      if (!snapshot.exists) {
        Chats.doc(chatId).set({
          createdAt: Date.now(),
          participants: [sender, receiver],
        }, { merge: true })
      }
    })
      .then(() => {
        Chats.doc(chatId).collection('messages').add({
          createdAt: Date.now(),
          content,
          sender,
          read: []
        })
      })
      .catch(err => console.log(err))
  }

  const getChatMessages = (chatId) => {
    const activeChat = state.chats.find(chat => chat.id === chatId);
    Chats.doc(chatId).collection('messages').orderBy('createdAt', 'asc').onSnapshot(snapshot => {
      const messages = snapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      })
      dispatch({
        type: SET_ONE,
        payload: {
          chat: {
            ...activeChat,
            messages,
          }
        }
      })
    })
  }

  const handleActiveChatId = (id) => {
    dispatch({
      type: SET_ACTIVE_CHAT_ID,
      payload: id
    })
  }

  const value = {
    getChats,
    getChatMessages,
    sendMessage,
    handleActiveChatId,
    ...state
  }

  return (
    <MessagesContext.Provider value={value}>
      {children}
    </MessagesContext.Provider>
  )
}

export default MessagesProvider
