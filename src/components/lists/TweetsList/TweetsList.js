import React from 'react';
import TweetCard from '../../cards/TweetCard/TweetCard';
import Spinner from '../../loaders/Spinner/Spinner';
import './TweetsList.css';

const TweetsList = ({ isLoading, tweets = [] }) => {
  if (isLoading) {
    return <Spinner size='md' />
  } else if (!isLoading && tweets.length === 0) {
    return (
      <ul className='tweetsList'>
        No tweets to show
      </ul>
    )
  } else {
    return (
      <ul className='tweetsList'>
        {tweets?.map(tweet => <TweetCard key={tweet.id} tweet={tweet} />)}
      </ul>
    )
  }
}

export default TweetsList
