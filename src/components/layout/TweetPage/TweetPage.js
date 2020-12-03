import React, { useContext, useEffect } from 'react';
import { TweetsContext } from '../../../contexts/TweetsContext';
import TweetCard from '../../cards/TweetCard/TweetCard';
import TweetsList from '../../lists/TweetsList/TweetsList';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import './TweetPage.css';

const TweetPage = ({ match: { params } }) => {
  const { fetchTweet, fetchTweets, fetchTweetReplies, isFetching, tweets: { currentTweet, currentTweetReplies } } = useContext(TweetsContext);
  const { tweetId } = params;

  useEffect(() => {
    fetchTweet(tweetId);
    fetchTweets({
      collection: 'tweets',
      queryParams: {
        repliedTo: tweetId
      },
      key: 'currentTweetReplies'
    })
  }, [tweetId])

  return (
    <div className='tweetPage'>
      <div className='tweetPage__tweet'>
        <Header backButton title="Tweet" />
        <TweetCard tweet={currentTweet} />
        <TweetsList isLoading={isFetching} tweets={currentTweetReplies} />
      </div>
      <Sidebar />
    </div>
  )
}

export default TweetPage
