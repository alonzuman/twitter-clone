import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './ChatCard.css';
import { db } from '../../../firebase';
import { MessagesContext } from '../../../contexts/MessagesContext';
import useProfile from '../../../hooks/useProfile';
import Avatar from '../../avatars/Avatar/Avatar';
import moment from 'moment';

const ChatCard = ({ chatId, onClick }) => {
  const { chats } = useContext(MessagesContext);
  const { uid } = useProfile();
  const { push, location } = useHistory();
  const currentChat = chats[chatId];
  const currentUser = currentChat?.participantsData?.find(user => user.uid !== uid)
  const { displayName, avatar, username } = currentUser;

  const handleClick = () => {
    if (onClick !== null) {
      onClick(chatId)
    } else {
      const chatUrl = `/messages/${chatId}`;
      if (location.pathname !== chatUrl) {
        push(chatUrl);
      }
    }
  }

  return (
    <div className='chatCard' onClick={handleClick}>
      <div className='chatCard__avatar'>
        <Avatar src={avatar} />
      </div>
      <div className='chatCard__main'>
        <div className='chatCard__header'>
          <h4 className='chatCard__displayName'>{displayName}</h4>
          <p className='chatCard__username'>@{username}</p>
        </div>
        <p>{moment(currentChat?.updatedAt).fromNow()}</p>
      </div>
    </div>
  )
}

export default ChatCard
