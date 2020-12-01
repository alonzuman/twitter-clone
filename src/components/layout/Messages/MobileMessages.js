import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { MessagesContext } from '../../../contexts/MessagesContext';
import Chat from './Chat';
import ChatsList from './ChatsList';
import MessagesEmptyState from './MessagesEmptyState';
import './MobileMessages.css';

const MobileMessages = () => {
  const history = useHistory();
  const { chats } = useContext(MessagesContext);
  const chatId = history.location.pathname.split('/')[2];
  const noChats = Object.keys(chats)?.length === 0;

  return (
    <>
      {noChats && <MessagesEmptyState />}
      {!noChats && chatId && <Chat onBack={() => history.push('/messages')} />}
      {!noChats && !chatId && <ChatsList />}
    </>
  )
}

export default MobileMessages
