import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import { TweetsContext } from '../../../contexts/TweetsContext';
import Avatar from '../../avatars/Avatar/Avatar';
import './Tweet.css';
import TweetFooter from './TweetFooter';
import TweetInput from './TweetInput';

const Tweet = ({ autoFocus, rows }) => {
  const { user: { avatar, displayName } } = useContext(AuthContext);
  const { newTweet, editTweet } = useContext(TweetsContext);

  return (
    <div className='tweet__container'>
      <div className='tweet__avatar'>
        <Avatar size='sm' src={avatar} alt={displayName} />
      </div>
      <div className='tweet__input'>
        <TweetInput autoFocus={autoFocus} tweet={newTweet} editTweet={editTweet} rows={rows} />
        <TweetFooter />
      </div>
    </div>
  )
}

export default Tweet
