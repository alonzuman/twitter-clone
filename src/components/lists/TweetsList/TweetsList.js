import React from 'react';
import TweetCard from '../../cards/TweetCard/TweetCard';
import './TweetsList.css';

const TweetsList = ({ isLoading, tweets }) => {
  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <ul className='tweetsList'>
      {tweets?.map(tweet => <TweetCard key={tweet.id} tweet={tweet} />)}
    </ul>
  )
}

export default TweetsList
