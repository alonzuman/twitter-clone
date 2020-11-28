import React, { useContext, useEffect } from 'react';
import { TweetsContext } from '../../../contexts/TweetsContext';
import TweetCard from '../../cards/TweetCard/TweetCard';
import TweetsList from '../../lists/TweetsList/TweetsList';
import Header from '../Header/Header';
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
    <>
      <Header backButton title="Tweet" />
      <TweetCard tweet={currentTweet} />
      <TweetsList isLoading={isFetching} tweets={currentTweetReplies} />
    </>
  )
}

export default TweetPage
