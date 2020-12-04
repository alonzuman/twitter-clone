import React from 'react';
import Chat from '../Messages/Chat';
import './FooterMessengerChat.css';

const FooterMessengerChat = ({ chatId }) => {
  return (
    <div className='footerMessengerChat'>
      <Chat customChatId={chatId} showHeader={false} />
    </div>
  )
}

export default FooterMessengerChat
