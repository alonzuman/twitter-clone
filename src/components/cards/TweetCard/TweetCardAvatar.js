import React from 'react';
import Avatar from '../../avatars/Avatar/Avatar';
import './TweetCardAvatar.css';

const TweetCardAvatar = ({ src = '', alt = '' }) => {
  return (
    <div className="tweetCard__avatar">
      <Avatar src={src} alt={alt} size='sm' />
    </div>
  )
}

export default TweetCardAvatar
