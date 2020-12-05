import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../avatars/Avatar/Avatar';
import TweetCardFooter from '../../cards/TweetCard/TweetCardFooter';
import './TweetPageTweet.css';

const TweetPageTweet = ({ tweet }) => {
  const { displayName, username, avatar, content, createdAt } = tweet;

  return (
    <div className='tweetPageTweet'>
      <header className='tweetPageTweet__header'>
        <Link to={`/${username}`}>
          <Avatar size='lg' src={avatar} alt={displayName} />
        </Link>
        <div className='tweetPageTweet__headerInfo'>
          <h3 className='tweetPageTweet__displayName'>{displayName}</h3>
          <p className='tweetPageTweet__username'>{username}</p>
        </div>
      </header>
      <body className='tweetPageTweet__body'>
        {content}
      </body>
      <footer className='tweetPageTweet__footer'>
        <TweetCardFooter id={tweet.id} tweet={tweet} likes={tweet?.likes} replies={tweet?.replies} />
      </footer>
    </div>
  )
}

export default TweetPageTweet
