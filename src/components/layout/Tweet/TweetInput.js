import React, { useEffect, useRef } from 'react';
import './TweetInput.css';

const TweetInput = ({ autoFocus, rows = 2, value, onChange }) => {
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
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default TweetInput
