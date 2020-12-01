import React from 'react';
import useProfile from '../../../hooks/useProfile';
import './ChatMessage.css';
import moment from 'moment';

const ChatMessage = ({ content, sender, createdAt, read }) => {
  const { uid: currentUserId } = useProfile();

  return (
    <li className={`chatMessage chatMessage__wrapper--${currentUserId === sender ? 'sent' : 'received'}`}>
      <div className='chatMessage__container'>
        <div className={`chatMessage__bubble--${currentUserId === sender ? 'sent' : 'received'}`}>
          <p>{content}</p>
        </div>
        <p className='chatMessage__timeStamp'>{moment(createdAt).fromNow()}</p>
      </div>
    </li>
  )
}

export default ChatMessage
