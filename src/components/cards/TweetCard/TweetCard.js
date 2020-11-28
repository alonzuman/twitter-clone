import React from 'react';
import { Link } from 'react-router-dom';
import './TweetCard.css';
import TweetCardAvatar from './TweetCardAvatar';
import TweetCardBody from './TweetCardBody';
import TweetCardFooter from './TweetCardFooter';
import TweetCardHeader from './TweetCardHeader';

const URL = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80';

const TweetCard = ({ tweet }) => {
  const { id, content, avatar = URL, displayName = 'Cupidatat', username = '@doloraute', createdAt, likes, replies } = tweet;
  return (
    <Link className='tweetCard__link' to={`/tweets/${id}`}>
      <li className='tweetCard__container'>
        <Link onClick={e => e.stopPropagation()} to={`/users/${username}`}>
          <TweetCardAvatar src={avatar} alt={displayName} />
        </Link>
        <main className='tweetCard__main'>
          <TweetCardHeader tweet={tweet} displayName={displayName} username={username} createdAt={createdAt} />
          <TweetCardBody content={content} />
          <TweetCardFooter replies={replies} likes={likes} id={id} tweet={{ displayName, username, createdAt, avatar, id, content }} />
        </main>
      </li>
    </Link>
  )
}

export default TweetCard
