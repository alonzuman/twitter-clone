import React, { useContext, useEffect } from 'react';
import { MessagesContext } from '../../../contexts/MessagesContext';
import useProfile from '../../../hooks/useProfile';
import useWindowSize from '../../../hooks/useWindowSize';
import DesktopMessages from './DesktopMessages';
import './Messages.css';
import MobileMessages from './MobileMessages';

const Messages = () => {
  const { getChats, isFetched } = useContext(MessagesContext)
  const { uid } = useProfile();
  const { width } = useWindowSize();

  useEffect(() => {
    if (!isFetched) {
      getChats(uid)
    }
  }, [])


  if (width <= 768) {
    return <MobileMessages />
  } else {
    return <DesktopMessages />
  }
}

export default Messages
