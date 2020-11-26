import React, { useContext } from 'react';
import HeartIcon from '../../../assets/icons/HeartIcon';
import HeartIconFilled from '../../../assets/icons/HeartIconFilled';
import { TweetsContext } from '../../../contexts/TweetsContext';
import IconButton from '../../buttons/IconButton/IconButton';
import './TweetCardFooter.css';

const TweetCardFooter = ({ id, likes }) => {
  const { likeTweet, unlikeTweet } = useContext(TweetsContext);
  const isLiked = likes.includes('id');

  const handleHeartClick = () => {
    if (isLiked) {
      return unlikeTweet(id);
    } else {
      return likeTweet(id)
    }
  }

  return (
    <footer className='tweetCardFooter'>
      <IconButton size='sm' onClick={handleHeartClick}>{isLiked ? <HeartIconFilled className='tweetCardFooter__iconFilled' size={18} /> : <HeartIcon className='tweetCardFooter__icon' size={18} />}</IconButton>
      <span className='tweetCardFooter__likesCount'>{likes?.length}</span>
    </footer>
  )
}

export default TweetCardFooter
