import React, { useContext } from 'react';
import { TweetsContext } from '../../../contexts/TweetsContext';
import PrimaryButton from '../../buttons/PrimaryButton/PrimaryButton';
import './TweetFooter.css';

const TweetFooter = () => {
  const { newTweet, addTweet, isAdding } = useContext(TweetsContext);

  const isDisabled = isAdding || newTweet?.content?.length === 0;

  return (
    <footer className="tweetFooter__container">
      <div className="tweetFooter__button">
        <PrimaryButton disabled={isDisabled} isLoading={isAdding} onClick={addTweet}>Tweet</PrimaryButton>
      </div>
    </footer>
  )
}

export default TweetFooter
