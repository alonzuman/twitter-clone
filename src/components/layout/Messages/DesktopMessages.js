import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { MessagesContext } from '../../../contexts/MessagesContext';
import Chat from './Chat';
import ChatsList from './ChatsList';
import EmptyState from './EmptyState';
import './DesktopMessages.css';

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
      {noChats && <EmptyState title="No messages" body="Go send someone a message yo" />}
      {!noChats && <ChatsList />}
      <div className='messages__desktopContainer'>
        {!noChats && activeChatId && <Chat />}
      </div>
    </div>
  )
}

export default DesktopMessages
