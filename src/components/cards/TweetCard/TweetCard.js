import React from 'react';
import { Link } from 'react-router-dom';
import './TweetCard.css';
import TweetCardAvatar from './TweetCardAvatar';
import TweetCardBody from './TweetCardBody';
import TweetCardFooter from './TweetCardFooter';
import TweetCardHeader from './TweetCardHeader';

const URL = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80';

const TweetCard = ({ tweet: { id, content, avatar = URL, displayName = 'Cupidatat', username = '@doloraute', createdAt, likes, replies } }) => {
  return (
    <li className='tweetCard__container'>
      <Link to={`/users/${username}`}>
        <TweetCardAvatar src={avatar} alt={displayName} />
      </Link>
      <main className='tweetCard__main'>
        <TweetCardHeader id={id} displayName={displayName} username={username} createdAt={createdAt} />
        <Link className='tweetCard__link' to={`/tweets/${id}`}>
          <TweetCardBody content={content} />
        </Link>
        <TweetCardFooter replies={replies} likes={likes} id={id} tweet={{ displayName, username, createdAt, avatar, id, content }} />
      </main>
    </li>
  )
}

export default TweetCard
