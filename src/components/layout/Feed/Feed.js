import React, { useContext, useEffect } from 'react'
import { TweetsContext } from '../../../contexts/TweetsContext'
import './Feed.css';
import Tweet from '../Tweet/Tweet';
import TweetsList from '../../lists/TweetsList/TweetsList';

const Feed = () => {
  const { tweets, fetchTweets, isFetching, isFetched } = useContext(TweetsContext);

  useEffect(() => {
    if (!isFetched) {
      fetchTweets();
    }
  }, [])

  return (
    <div className='feed__container'>
      <header className="feed__header">
        <h1 className="feed__title">Home</h1>
      </header>
      <div className="feed__tweet">
        <Tweet />
      </div>
      <TweetsList isLoading={isFetching} tweets={tweets} />
    </div>
  )
}

export default Feed
