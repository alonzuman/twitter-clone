import React, { useContext } from 'react';
import { MessagesContext } from '../../../contexts/MessagesContext';
import useProfile from '../../../hooks/useProfile';
import './ChatsList.css';

const ChatsList = () => {
  const { chats, handleActiveChatId } = useContext(MessagesContext);
  const { uid } = useProfile();

  return (
    <div className='chatsList'>
      <ul className='chatsList__list'>
        {chats?.map(chat => <li className='chatList__item' onClick={() => handleActiveChatId(chat.id)}>{chat.participants.filter(id => id !== uid)}</li>)}
      </ul>
    </div>
  )
}

export default ChatsList
