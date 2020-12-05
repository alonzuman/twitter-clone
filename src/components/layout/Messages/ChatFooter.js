import React, { useContext, useState } from 'react';
import SendIcon from '../../../assets/icons/SendIcon';
import { MessagesContext } from '../../../contexts/MessagesContext';
import useProfile from '../../../hooks/useProfile';
import IconButton from '../../buttons/IconButton/IconButton';
import './ChatFooter.css';

const ChatFooter = ({ chatId }) => {
  const [newMessage, setNewMessage] = useState('');
  const { uid } = useProfile();
  const { chats, getChatMessages, sendMessage, isFetchingMessages } = useContext(MessagesContext);

  const currentChat = chats[chatId];
  const messages = currentChat?.messages;

  const handleSubmit = async e => {
    e.preventDefault();
    await sendMessage(uid, chatId, newMessage)
    if (messages === 0) {
      getChatMessages(chatId);
    }
    setNewMessage('')
  }

  return (
    <div className='chat__footer'>
      <form className='chat__inputForm' onSubmit={handleSubmit}>
        <input className='chat__inputField' value={newMessage} onChange={e => setNewMessage(e.target.value)} placeholder='type in yo msg' />
        <IconButton disabled={isFetchingMessages} className='chat__sendButton' type='submit'>
          <SendIcon className='chat__sendIcon' />
        </IconButton>
      </form>
    </div>
  )
}

export default ChatFooter
