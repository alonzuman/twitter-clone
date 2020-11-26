import React, { useEffect, useRef } from 'react';
import './TweetInput.css';

const TweetInput = ({ autoFocus, rows = 2, content, setContent }) => {
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
        value={content}
        onChange={e => setContent(e.target.value)}
      />
    </div>
  )
}

export default TweetInput
