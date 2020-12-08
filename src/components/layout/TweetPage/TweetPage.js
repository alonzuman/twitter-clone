import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TweetsContext } from '../../../contexts/TweetsContext';
import Avatar from '../../avatars/Avatar/Avatar';
import TweetCard from '../../cards/TweetCard/TweetCard';
import TweetCardFooter from '../../cards/TweetCard/TweetCardFooter';
import TweetsList from '../../lists/TweetsList/TweetsList';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import './TweetPage.css';

const TweetPage = ({ match: { params } }) => {
  const { tweetId } = params;
  const { fetchTweet, fetchTweets, fetchTweetReplies, isFetching, tweets: { currentTweet, currentTweetReplies } } = useContext(TweetsContext);
  const { displayName, username, avatar, content, createdAt } = currentTweet;

  useEffect(() => {
    fetchTweet(tweetId);
    fetchTweets({
      collection: 'tweets',
      queryParams: {
        repliedTo: tweetId
      },
      key: 'currentTweetReplies'
    })
  }, [tweetId])

  return (
    <div className='tweetPage'>
      <div className='tweetPage__tweet'>
        <Header backButton title="Tweet" />
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
            <TweetCardFooter id={currentTweet.id} tweet={currentTweet} likes={currentTweet?.likes} replies={currentTweet?.replies} />
          </footer>
        </div>
        <TweetsList isLoading={isFetching} tweets={currentTweetReplies} />
      </div>
      <Sidebar />
    </div>
  )
}

export default TweetPage
