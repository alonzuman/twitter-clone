import React, { useContext, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import SendIcon from '../../../assets/icons/SendIcon';
import { MessagesContext } from '../../../contexts/MessagesContext';
import useProfile from '../../../hooks/useProfile';
import Avatar from '../../avatars/Avatar/Avatar';
import IconButton from '../../buttons/IconButton/IconButton';
import Spinner from '../../loaders/Spinner/Spinner';
import Header from '../Header/Header';
import './Chat.css';
import ChatMessage from './ChatMessage';

const Chat = () => {
  const { chats, getChatMessages, sendMessage, isFetching } = useContext(MessagesContext);
  const [newMessage, setNewMessage] = useState('');
  const history = useHistory()
  const { uid } = useProfile();
  const bottomRef = useRef(null);
  const chatId = history.location.pathname.split('/')[2];
  const currentChat = chats[chatId];
  const messages = currentChat.messages;
  const currentChatUser = currentChat.participantsData.find(user => user.id !== uid)

  const scrollIntoView = () => {
    if (bottomRef && messages) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  useEffect(() => {
    if (chatId) {
      getChatMessages(chatId);
    }
  }, [history.location.pathname])

  useEffect(() => {
    scrollIntoView();
  }, [])

  const handleSubmit = async e => {
    e.preventDefault();
    await sendMessage(uid, chatId, newMessage)
    if (messages?.length === 0) {
      getChatMessages(chatId);
    }
    setNewMessage('')
    scrollIntoView();
  }

  return (
    <div className='chat'>
      <Header title={currentChatUser.displayName} action={<Avatar src={currentChatUser.avatar} size='xs' />} />
      <ul id='chatMessages' className='chat__messages'>
        {!messages && <Spinner className='chat__spinner' size='lg' />}
        {messages && messages?.map(({ content, sender, createdAt, read, id }) => <ChatMessage key={id} id={id} content={content} sender={sender} createdAt={createdAt} read={read} />)}
        <div ref={bottomRef} />
      </ul>
      <div className='chat__footer'>
        <form className='chat__inputForm' onSubmit={handleSubmit}>
          <input className='chat__inputField' value={newMessage} onChange={e => setNewMessage(e.target.value)} placeholder='type in yo msg' />
          <IconButton disabled={isFetching} className='chat__sendButton' type='submit'>
            <SendIcon className='chat__sendIcon' />
          </IconButton>
        </form>
      </div>
    </div>
  )
}

export default Chat
