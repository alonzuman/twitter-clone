import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { MessagesContext } from '../../../contexts/MessagesContext';
import Spinner from '../../loaders/Spinner/Spinner';
import Chat from './Chat';
import ChatsList from './ChatsList';
import MessagesEmptyState from './MessagesEmptyState';
import './MobileMessages.css';

const MobileMessages = () => {
  const history = useHistory();
  const { chats, isFetching, isFetchingMessages } = useContext(MessagesContext);
  const chatId = history.location.pathname.split('/')[2];
  const noChats = Object.keys(chats || {})?.length === 0;

  return (
    <>
      {isFetching && <Spinner className='chat__spinner' size='md' />}
      {!noChats && chatId && <Chat onBack={() => history.push('/messages')} />}
      {!noChats && !isFetching && !chatId && <ChatsList />}
      {noChats && !isFetching && !isFetchingMessages && <MessagesEmptyState />}
    </>
  )
}

export default MobileMessages
