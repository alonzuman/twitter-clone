import React from 'react';
import TweetCard from '../../cards/TweetCard/TweetCard';
import Spinner from '../../loaders/Spinner/Spinner';
import './TweetsList.css';

const TweetsList = ({ isLoading, tweets }) => {
  if (isLoading) {
    return <Spinner size='md' />
  }

  return (
    <ul className='tweetsList'>
      {tweets?.map(tweet => <TweetCard key={tweet.id} tweet={tweet} />)}
    </ul>
  )
}

export default TweetsList
