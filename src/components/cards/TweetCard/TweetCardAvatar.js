import React from 'react';
import Avatar from '../../avatars/Avatar/Avatar';
import './TweetCardAvatar.css';

const TweetCardAvatar = ({ src = '', alt = '', size = 'sm' }) => {
  return (
    <div className="tweetCard__avatar">
      <Avatar src={src} alt={alt} size={size} />
    </div>
  )
}

export default TweetCardAvatar
