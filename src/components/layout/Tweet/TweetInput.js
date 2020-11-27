import React, { useContext, useEffect, useRef } from 'react';
import { TweetsContext } from '../../../contexts/TweetsContext';
import './TweetInput.css';

const TweetInput = ({ autoFocus, rows = 2 }) => {
  const { newTweet: tweet, editTweet } = useContext(TweetsContext);
  const inputRef = useRef(null);

  useEffect(() => {
    if (autoFocus) {
      inputRef.current.focus();
    }
  }, [inputRef])

  return (
    <div className="tweetInput__container">
      <textarea
        placeholder={`What's happening?`}
        ref={inputRef}
        className="tweetInput__input"
        rows={rows}
        value={tweet.content}
        onChange={editTweet}
      />
    </div>
  )
}

export default TweetInput
