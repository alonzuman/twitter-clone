import React, { useContext, useEffect, useState } from 'react';
import { MessagesContext } from '../../../contexts/MessagesContext';
import useProfile from '../../../hooks/useProfile';
import './Chat.css';
import ChatMessage from './ChatMessage';

const Chat = () => {
  const { chats, getChatMessages, isFetched, activeChatId, sendMessage } = useContext(MessagesContext);
  const { uid: currentUserId } = useProfile();
  const [newMessage, setNewMessage] = useState('');
  const chat = chats?.find(chat => chat.id === activeChatId);

  useEffect(() => {
    if (isFetched && chats.length !== 0) {
      getChatMessages(activeChatId || chats[0]?.id)
    }
  }, [isFetched, activeChatId])

  const handleSend = () => {
    sendMessage(currentUserId, chat.participants.filter(id => id !== currentUserId), newMessage)
    setNewMessage('')
  }

  if (chat) {
    return (
      <div className='chat'>
        <ul className='chat__messages'>
          {chat.messages.map(({ content, sender, createdAt, read, id }) => <ChatMessage key={id} id={id} content={content} sender={sender} createdAt={createdAt} read={read} />)}
        </ul>
        <div className='chat__footer'>
          <input value={newMessage} onChange={e => setNewMessage(e.target.value)} placeholder='type in yo msg' />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    )
  } else {
    return <h1>Empty state</h1>
  }
}

export default Chat
