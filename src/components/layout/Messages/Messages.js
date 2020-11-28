import React, { useContext, useEffect } from 'react';
import { MessagesContext } from '../../../contexts/MessagesContext';
import useProfile from '../../../hooks/useProfile';
import Chat from './Chat';
import ChatsList from './ChatsList';
import './Messages.css';

const Messages = () => {
  const { chats, getChats, isFetching, isFetched } = useContext(MessagesContext)
  const { uid } = useProfile();

  useEffect(() => {
    if (!isFetched) {
      getChats(uid)
    }
  }, [])

  return (
    <div className='messages'>
      <ChatsList />
      <Chat />
    </div>
  )
}

export default Messages
