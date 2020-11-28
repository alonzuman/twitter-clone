import React, { useContext } from 'react';
import CommentIcon from '../../../assets/icons/CommentIcon';
import HeartIcon from '../../../assets/icons/HeartIcon';
import HeartIconFilled from '../../../assets/icons/HeartIconFilled';
import { ProfileContext } from '../../../contexts/ProfileContext';
import { TweetsContext } from '../../../contexts/TweetsContext';
import IconButton from '../../buttons/IconButton/IconButton';
import './TweetCardFooter.css';

const TweetCardFooter = ({ id, likes = [], replies = 0, tweet }) => {
  const { openNewReplyDialog, likeTweet, unlikeTweet } = useContext(TweetsContext);
  const { user: { uid } } = useContext(ProfileContext);
  const isLiked = likes?.includes(uid);

  const handleHeartClick = () => {
    if (isLiked) {
      return unlikeTweet(id, uid);
    } else {
      return likeTweet(id, uid)
    }
  }

  return (
    <footer className='tweetCardFooter'>
      <div className='tweetCardFooter__action'>
        <IconButton size='sm' onClick={() => openNewReplyDialog(tweet)} className='iconButton--primary'>
          <CommentIcon className='tweetCardFooter__icon' size={18} />
        </IconButton>
        <span className='tweetCardFooter__counter'>{replies}</span>
      </div>
      <div className='tweetCardFooter__action'>
        <IconButton size='sm' onClick={handleHeartClick} className='iconButton--red'>
          {isLiked ? <HeartIconFilled className='tweetCardFooter__iconFilled' size={18} /> : <HeartIcon className='tweetCardFooter__icon' size={18} />}
        </IconButton>
        <span className='tweetCardFooter__counter'>{likes?.length}</span>
      </div>
    </footer>
  )
}

export default TweetCardFooter
