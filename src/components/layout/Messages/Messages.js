import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { MessagesContext } from '../../../contexts/MessagesContext';
import useProfile from '../../../hooks/useProfile';
import Chat from './Chat';
import ChatsList from './ChatsList';
import './Messages.css';

const Messages = () => {
  const history = useHistory();
  const [chatId, setChatId] = useState(history.location.pathname.split('/')[2])
  const { getChats, isFetched, chats } = useContext(MessagesContext)
  const { uid } = useProfile();

  useEffect(() => {
    if (!isFetched) {
      getChats(uid)
    }
  }, [])

  useEffect(() => {
    if (isFetched && chats && !chatId) {
      const firstChatId = Object.keys(chats)[0];
      setChatId(firstChatId)
      history.push(`/messages/${firstChatId}`)
    }
  }, [isFetched])

  return (
    <div className='messages'>
      <ChatsList />
      {chatId && chats && <Chat />}
    </div>
  )
}

export default Messages
