import React, { useContext, useEffect, useState } from 'react';
import { ProfileContext } from '../../../contexts/ProfileContext';
import { TweetsContext } from '../../../contexts/TweetsContext';
import Avatar from '../../avatars/Avatar/Avatar';
import './Tweet.css';
import TweetFooter from './TweetFooter';
import TweetInput from './TweetInput';

const Tweet = ({ autoFocus, rows }) => {
  const { isAuth, user: { displayName, username, avatar, uid }, isFetched } = useContext(ProfileContext);
  const { addTweet } = useContext(TweetsContext);
  const [tweet, setTweet] = useState({
    displayName: '',
    username: '',
    content: '',
    createdAt: Date.now(),
    avatar: '',
    likes: [],
    isTweet: true,
    replies: 0,
    repliedTo: '',
    uid: ''
  })

  useEffect(() => {
    if (isAuth) {
      setTweet({
        ...tweet,
        displayName,
        username,
        avatar,
        uid,
        createdAt: Date.now()
      })
    }
  }, [isFetched])

  const handleContentChange = e => {
    setTweet({
      ...tweet,
      content: e.target.value
    })
  }

  const handleSubmit = async () => {
    await addTweet(tweet);
    setTweet({
      ...tweet,
      content: ''
    })
  }

  return (
    <div className='tweet__container'>
      <div className='tweet__avatar'>
        <Avatar size='sm' src={avatar} alt={displayName} />
      </div>
      <div className='tweet__input'>
        <TweetInput value={tweet.content} onChange={handleContentChange} autoFocus={autoFocus} rows={rows} />
        <TweetFooter onSubmit={handleSubmit} content={tweet.content} />
      </div>
    </div>
  )
}

export default Tweet
