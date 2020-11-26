import React, { useContext } from 'react';
import { TweetsContext } from '../../../contexts/TweetsContext';
import PrimaryButton from '../../buttons/PrimaryButton/PrimaryButton';
import './TweetFooter.css';

const TweetFooter = () => {
  const { content, addTweet } = useContext(TweetsContext);

  return (
    <footer className="tweetFooter__container">
      <div className="tweetFooter__button">
        <PrimaryButton disabled={content?.length === 0} onClick={addTweet}>Tweet</PrimaryButton>
      </div>
    </footer>
  )
}

export default TweetFooter
