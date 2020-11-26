import React from 'react';
import './TweetCardBody.css';

const TweetCardBody = ({ content }) => {
  return (
    <div className='tweetCard__body'>
      {content}
    </div>
  )
}

export default TweetCardBody
