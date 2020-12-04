import React, { useEffect, useRef } from 'react';
import Spinner from '../../loaders/Spinner/Spinner';
import ChatMessage from './ChatMessage';
import './ChatMessages.css';

const ChatMessages = ({ isFetchedMessages, isFetchingMessages, messages }) => {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef) {
      const scrollHeight = containerRef.current.scrollHeight;
      containerRef.current.scrollTop = scrollHeight;
    }
  }, [messages])

  return (
    <ul ref={containerRef} id='chatMessages' className='chat__messages'>
      {isFetchingMessages && <Spinner className='chat__spinner' size='md' />}
      {isFetchedMessages && messages?.map(({ content, sender, createdAt, read, id }) => <ChatMessage key={id} id={id} content={content} sender={sender} createdAt={createdAt} read={read} />)}
    </ul>
  )
}

export default ChatMessages
