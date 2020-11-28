import React, { useContext, useEffect } from 'react'
import { TweetsContext } from '../../../contexts/TweetsContext'
import './Feed.css';
import Tweet from '../Tweet/Tweet';
import TweetsList from '../../lists/TweetsList/TweetsList';
import Header from '../Header/Header';

const Feed = () => {
  const { tweets, fetchTweets, isFetching, isFetched } = useContext(TweetsContext);

  useEffect(() => {
    fetchTweets({
      queryParams: {
        isTweet: true
      },
      key: 'all'
    });
  }, [])

  return (
    <div className='feed__container'>
      <Header title='Home' />
      <div className="feed__tweet">
        <Tweet />
      </div>
      <TweetsList isLoading={isFetching} tweets={tweets.all} />
    </div>
  )
}

export default Feed
