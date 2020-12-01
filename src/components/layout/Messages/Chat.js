import React, { useContext, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ArrowLeftIcon from '../../../assets/icons/ArrowLeftIcon';
import SendIcon from '../../../assets/icons/SendIcon';
import { MessagesContext } from '../../../contexts/MessagesContext';
import useProfile from '../../../hooks/useProfile';
import Avatar from '../../avatars/Avatar/Avatar';
import IconButton from '../../buttons/IconButton/IconButton';
import Spinner from '../../loaders/Spinner/Spinner';
import Header from '../Header/Header';
import './Chat.css';
import ChatMessage from './ChatMessage';

const Chat = ({ onBack }) => {
  const { chats, getChatMessages, sendMessage, isFetchingMessages, isFetchedMessages } = useContext(MessagesContext);
  const [newMessage, setNewMessage] = useState('');
  const history = useHistory()
  const { uid } = useProfile();
  const bottomRef = useRef(null);
  const chatId = history.location.pathname.split('/')[2];
  const currentChat = chats[chatId];
  const messages = currentChat?.messages;
  const currentChatUser = currentChat?.participantsData?.find(user => user.id !== uid)

  const scrollIntoView = () => {
    if (bottomRef && messages) {
      bottomRef?.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  useEffect(() => {
    if (chatId) {
      getChatMessages(chatId);
    }
  }, [history.location.pathname])

  useEffect(() => {
    scrollIntoView();
  }, [messages])

  const handleSubmit = async e => {
    e.preventDefault();
    await sendMessage(uid, chatId, newMessage)
    getChatMessages(chatId);
    setNewMessage('')
    scrollIntoView();
  }

  const headerAction = (
    <div className='chat__headerActions'>
      {onBack && <IconButton className='chat__headerBackButton' onClick={onBack}><ArrowLeftIcon /></IconButton>}
      <Avatar className='chat__headerAvatar' size='xs' src={currentChatUser?.avatar} />
    </div>
  )

  return (
    <div className='chat'>
      <Header title={currentChatUser?.displayName} action={headerAction} size='xs' />
      {isFetchingMessages && !messages && <Spinner className='chat__spinner' size='md' />}
      {isFetchedMessages &&
      <ul id='chatMessages' className='chat__messages'>
        {messages?.map(({ content, sender, createdAt, read, id }) => <ChatMessage key={id} id={id} content={content} sender={sender} createdAt={createdAt} read={read} />)}
        <div ref={bottomRef} />
      </ul>}
      <div className='chat__footer'>
        <form className='chat__inputForm' onSubmit={handleSubmit}>
          <input className='chat__inputField' value={newMessage} onChange={e => setNewMessage(e.target.value)} placeholder='type in yo msg' />
          <IconButton disabled={isFetchingMessages} className='chat__sendButton' type='submit'>
            <SendIcon className='chat__sendIcon' />
          </IconButton>
        </form>
      </div>
    </div>
  )
}

export default Chat
