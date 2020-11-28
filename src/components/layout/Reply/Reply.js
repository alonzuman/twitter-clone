import React, { useContext, useEffect, useState } from 'react';
import { ProfileContext } from '../../../contexts/ProfileContext';
import { TweetsContext } from '../../../contexts/TweetsContext';
import Avatar from '../../avatars/Avatar/Avatar';
import PrimaryButton from '../../buttons/PrimaryButton/PrimaryButton';
import TweetCardHeader from '../../cards/TweetCard/TweetCardHeader';
import './Reply.css';

const Reply = () => {
  const { isAdding, tweets: { currentTweet }, addTweet } = useContext(TweetsContext);
  const { user: { avatar, username, displayName, uid } } = useContext(ProfileContext);
  const [tweet, setTweet] = useState({
    displayName: '',
    username: '',
    content: '',
    createdAt: Date.now(),
    avatar: '',
    likes: [],
    isTweet: false,
    replies: [],
    repliedTo: currentTweet.id,
    repliedTweet: {
      ...currentTweet
    },
    uid: ''
  })

  useEffect(() => {
    if (uid) {
      setTweet({
        ...tweet,
        username,
        displayName,
        avatar,
        uid
      })
    }
  }, [uid])

  const isDisabled = isAdding || tweet.content === ''

  return (
    <div className='reply'>
      <section className='reply__section'>
        <div className='reply__side'>
          <Avatar size='md' src={currentTweet.avatar} alt={currentTweet.username} />
          <div className='reply__line' />
        </div>
        <div className='reply__middle'>
          <TweetCardHeader id={currentTweet.id} displayName={currentTweet.displayName} username={currentTweet.username} createdAt={currentTweet.createdAt} />
          <p className='reply__tweetContent'>{currentTweet.content}</p>
          <p className='reply__replyingTo'>replying to <span className='reply__username'>@{currentTweet.username}</span></p>
        </div>
      </section>
      <section className='reply__section'>
        <div className='reply__side'>
          <Avatar size='md' src={avatar} alt={username} />
        </div>
        <textarea className='reply__input' palceholder='Tweet your reply' value={tweet.content} onChange={e => setTweet({ ...tweet, content: e.target.value })} />
      </section>
      <footer className='reply__footer'>
        <PrimaryButton isLoading={isAdding} disabled={isDisabled} onClick={() => addTweet(tweet)}>Reply</PrimaryButton>
      </footer>
    </div>
  )
}

export default Reply
