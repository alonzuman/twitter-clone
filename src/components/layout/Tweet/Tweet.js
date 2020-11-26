import React, { useContext, useState } from 'react';
import { TweetsContext } from '../../../contexts/TweetsContext';
import Avatar from '../../avatars/Avatar/Avatar';
import './Tweet.css';
import TweetFooter from './TweetFooter';
import TweetInput from './TweetInput';

const Tweet = ({ autoFocus, rows }) => {
  const { content, setContent, addTweet } = useContext(TweetsContext);

  return (
    <div className='tweet__container'>
      <div className='tweet__avatar'>
        <Avatar size='sm' src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80" alt="" />
      </div>
      <div className='tweet__input'>
        <TweetInput autoFocus={autoFocus} content={content} setContent={setContent} rows={rows} />
        <TweetFooter />
      </div>
    </div>
  )
}

export default Tweet
