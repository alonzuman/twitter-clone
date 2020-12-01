import React, { useContext } from 'react';
import { MessagesContext } from '../../../contexts/MessagesContext';
import Spinner from '../../loaders/Spinner/Spinner';
import Header from '../Header/Header';
import ChatCard from './ChatCard';
import './ChatsList.css';

const ChatsList = () => {
  const { chats, isFetched, isFetching } = useContext(MessagesContext);

  return (
    <div className='chatsList'>
      <Header title='Messages' />
      <ul className='chatsList__list'>
        {!chats && <Spinner size='lg' className='chatsList__spinner' />}
        {chats && Object.keys(chats)?.map(chat => {
          return <ChatCard key={chat} chatId={chat} />
        })}
      </ul>
    </div>
  )
}

export default ChatsList
