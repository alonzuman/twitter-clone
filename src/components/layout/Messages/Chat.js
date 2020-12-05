import React, { useContext, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import ArrowLeftIcon from '../../../assets/icons/ArrowLeftIcon';
import { MessagesContext } from '../../../contexts/MessagesContext';
import useProfile from '../../../hooks/useProfile';
import Avatar from '../../avatars/Avatar/Avatar';
import IconButton from '../../buttons/IconButton/IconButton';
import Header from '../Header/Header';
import './Chat.css';
import ChatFooter from './ChatFooter';
import ChatMessages from './ChatMessages';

const Chat = ({ onBack, customChatId = '', showHeader = true, ...rest }) => {
  const { chats, getChatMessages, isFetchingMessages, isFetchedMessages } = useContext(MessagesContext);
  const history = useHistory()
  const { uid } = useProfile();
  const chatId = customChatId || history.location.pathname.split('/')[2];
  const currentChat = chats[chatId];
  const messages = currentChat?.messages;
  const currentChatUser = currentChat?.participantsData?.find(user => user.uid !== uid)
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef) {
      const scrollHeight = containerRef.current.scrollHeight;
      containerRef.current.scrollTop = scrollHeight;
    }
  }, [messages])

  useEffect(() => {
    if (chatId && !isFetchedMessages) {
      getChatMessages(chatId);
    }
  }, [history.location.pathname])

  useEffect(() => {
    getChatMessages(chatId);
  }, [customChatId])

  const headerAction = (
    <div className='chat__headerActions'>
      {onBack && <IconButton className='chat__headerBackButton' onClick={onBack}><ArrowLeftIcon /></IconButton>}
      <Avatar className='chat__headerAvatar' size='xs' src={currentChatUser?.avatar} />
    </div>
  )

  return (
    <div className={`chat ${rest.className || ''}`}>
      {showHeader && <Header title={currentChatUser?.displayName} action={headerAction} size='xs' />}
      <div ref={containerRef} className='chat__messagesWrapper'>
        <ChatMessages messages={messages} isFetchedMessages={isFetchedMessages} isFetchingMessages={isFetchingMessages} />
      </div>
      <ChatFooter chatId={chatId} />
    </div>
  )
}

export default Chat
