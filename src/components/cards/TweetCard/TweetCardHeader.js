import React, { useContext } from 'react';
import MoreIcon from '../../../assets/icons/MoreIcon';
import { TweetsContext } from '../../../contexts/TweetsContext';
import IconButton from '../../buttons/IconButton/IconButton';
import './TweetCardHeader.css';
import moment from 'moment';

const TweetCardHeader = ({ id, displayName, username, createdAt }) => {
  const { deleteTweet } =  useContext(TweetsContext);

  return (
    <header className='tweetCard__header'>
      <div className='tweetCard__headerInfo'>
        <span className='tweetCard__displayName'>{displayName}</span>
        <span className='tweetCard__username'>{username}</span>
        <span className='tweetCard__seperator'>·</span>
        <span className='tweetCard__timestamp'>{moment(createdAt).fromNow()}</span>
      </div>
      <IconButton size='sm' onClick={() => deleteTweet(id)}>
        <MoreIcon size={18} className='tweetCard__header--icon' />
      </IconButton>
    </header>
  )
}

export default TweetCardHeader
