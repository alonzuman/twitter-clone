import React, { useContext } from 'react';
import { TweetsContext } from '../../../contexts/TweetsContext';
import PrimaryButton from '../../buttons/PrimaryButton/PrimaryButton';
import './TweetFooter.css';

const TweetFooter = ({ onSubmit, content }) => {
  const { isAdding } = useContext(TweetsContext);

  const isDisabled = isAdding || content?.length === 0;

  return (
    <footer className="tweetFooter__container">
      <div className="tweetFooter__button">
        <PrimaryButton disabled={isDisabled} isLoading={isAdding} onClick={onSubmit}>Tweet</PrimaryButton>
      </div>
    </footer>
  )
}

export default TweetFooter
