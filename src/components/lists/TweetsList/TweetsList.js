import React from 'react';
import TweetCard from '../../cards/TweetCard/TweetCard';
import Spinner from '../../loaders/Spinner/Spinner';
import './TweetsList.css';

const TweetsList = ({ isLoading, tweets = [] }) => {
  if (isLoading) {
    return <Spinner size='md' className='tweetsList__spinner' />
  } else if (!isLoading && tweets.length === 0) {
    return (
      <div className='tweetsList__emptyState'>
        <h2 className='tweetsList__emptyStateText'>No tweets to show</h2>
      </div>
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
