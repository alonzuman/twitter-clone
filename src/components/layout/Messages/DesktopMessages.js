import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { MessagesContext } from '../../../contexts/MessagesContext';
import Chat from './Chat';
import ChatsList from './ChatsList';
import MessagesEmptyState from './MessagesEmptyState';

const DesktopMessages = () => {
  const { chats } = useContext(MessagesContext)
  const history = useHistory();
  const [activeChatId, setActiveChatId] = useState(history.location.pathname.split('/')[2]);
  const noChats = Object.keys(chats || {}).length === 0;

  useEffect(() => {
    if (!noChats && !activeChatId) {
      const firstChatId = Object.keys(chats)[0];
      setActiveChatId(firstChatId);
      history.push(`/messages/${firstChatId}`);
    }
  }, [chats])

  return (
    <div className='messages'>
      {noChats && <MessagesEmptyState />}
      {!noChats && <ChatsList />}
      {!noChats && activeChatId && <Chat />}
    </div>
  )
}

export default DesktopMessages
