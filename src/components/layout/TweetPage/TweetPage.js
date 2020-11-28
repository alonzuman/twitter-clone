import React, { useContext, useEffect } from 'react';
import { TweetsContext } from '../../../contexts/TweetsContext';
import TweetCard from '../../cards/TweetCard/TweetCard';
import TweetRepliesList from '../../lists/TweetRepliesList/TweetRepliesList';
import TweetsList from '../../lists/TweetsList/TweetsList';
import Spinner from '../../loaders/Spinner/Spinner';
import Header from '../Header/Header';
import './TweetPage.css';

const TweetPage = ({ match: { params } }) => {
  const { fetchTweet, fetchTweetReplies, isFetching, tweets: { currentTweet, currentTweetReplies } } = useContext(TweetsContext);
  const { tweetId } = params;

  useEffect(() =>{
    if (currentTweet.id !== tweetId) {
      fetchTweet(tweetId);
      fetchTweetReplies(tweetId);
    }
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
