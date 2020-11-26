import React, { useContext } from 'react';
import MoreIcon from '../../../assets/icons/MoreIcon';
import { TweetsContext } from '../../../contexts/TweetsContext';
import IconButton from '../../buttons/IconButton/IconButton';
import './TweetCardHeader.css';

const TweetCardHeader = ({ id, displayName, username }) => {
  const { deleteTweet } =  useContext(TweetsContext);

  return (
    <header className='tweetCard__header'>
      <div className='tweetCard__headerInfo'>
        <span className='tweetCard__displayName'>{displayName}</span>
        <span className='tweetCard__username'>{username}</span>
      </div>
      <IconButton size='sm' onClick={() => deleteTweet(id)}>
        <MoreIcon size={18} className='tweetCard__header--icon' />
      </IconButton>
    </header>
  )
}

export default TweetCardHeader
