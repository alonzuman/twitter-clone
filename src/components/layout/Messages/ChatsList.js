import React, { useContext, useEffect, useRef } from 'react';
import { MessagesContext } from '../../../contexts/MessagesContext';
import Spinner from '../../loaders/Spinner/Spinner';
import Header from '../Header/Header';
import ChatCard from './ChatCard';
import './ChatsList.css';

const ChatsList = ({ className, showHeader = true, onClick = null }) => {
  const { chats, isFetched, isFetching } = useContext(MessagesContext);

  return (
    <div className={`chatsList ${className || ''}`}>
      {showHeader && <Header title='Messages' />}
      <ul className='chatsList__list'>
        {isFetching && <Spinner size='lg' className='chatsList__spinner' />}
        {isFetched && Object.keys(chats)?.map(chat => {
          return <ChatCard onClick={onClick} key={chat} chatId={chat} />
        })}
      </ul>
    </div>
  )
}

export default ChatsList
