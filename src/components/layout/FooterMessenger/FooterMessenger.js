import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ArrowLeftIcon from '../../../assets/icons/ArrowLeftIcon';
import { MessagesContext } from '../../../contexts/MessagesContext';
import useProfile from '../../../hooks/useProfile';
import useWindowSize from '../../../hooks/useWindowSize';
import IconButton from '../../buttons/IconButton/IconButton';
import ChatsList from '../Messages/ChatsList';
import './FooterMessenger.css';
import FooterMessengerChat from './FooterMessengerChat';

const FooterMessenger = () => {
  const { uid } = useProfile();
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [activeChat, setActiveChat] = useState('');
  const [currentChat, setCurrentChat] = useState({});
  const currentUsername = currentChat?.participantsData?.find(user => user.uid !== uid)?.displayName;
  const { chats, isFetched, getChats } = useContext(MessagesContext);
  const history = useHistory();
  const { width } = useWindowSize();

  history.listen(location => {
    const path = location.pathname.split('/')[1]
    if (path !== 'messages') {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  })

  const openChats = () => {
    setIsOpen(true);
  }

  const closeChats = () => {
    setIsOpen(false);
    setTimeout(() => {
      closeChat();
    }, 350);
  }

  const closeChat = () => {
    setActiveChat('');
  }

  const handleCardClick = (chatId) => {
    setActiveChat(chatId);
  }

  useEffect(() => {
    if (activeChat) {
      setCurrentChat(chats[activeChat])
    }
  }, [activeChat])

  useEffect(() => {
    if (isOpen && !isFetched) {
      getChats(uid)
    }
  }, [isOpen])

  if (history.location.pathname.split('/')[1] !== 'messages' && isVisible && width > 500) {
    return (
      <div className={`footerMessenger footerMessenger${isOpen ? '--open' : '--closed'}`}>
        <div className='footerMessenger__labelContainer'>
          {activeChat && <IconButton className='footerMessenger__backIconContainer' onClick={closeChat}><ArrowLeftIcon className='footerMessenger__backIcon' /></IconButton>}
          <div onClick={isOpen ? closeChats : openChats} className='footerMessenger__labelWrapper'>
            <h2 className='footerMessenger__label'>
              {activeChat ? currentUsername : 'Messages'}
            </h2>
          </div>
        </div>
        <div className='footerMessenger__chats'>
          {!activeChat && <ChatsList className='footerMessenger__chatsList' showHeader={false} onClick={handleCardClick} />}
          {activeChat && <FooterMessengerChat chatId={activeChat} onClose={closeChat} />}
        </div>
      </div>
    )
  } else {
    return null;
  }
}

export default FooterMessenger
