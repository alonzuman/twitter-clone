import React from 'react';
import './ChatMessage.css';

const ChatMessage = ({ content, sender, createdAt, read }) => {
  return (
    <li className='chatMessage'>
      <p>{createdAt}</p>
      <p>{content}</p>
    </li>
  )
}

export default ChatMessage
