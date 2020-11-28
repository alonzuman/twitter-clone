import React, { useContext, useEffect } from 'react';
import { TweetsContext } from '../../../contexts/TweetsContext';
import { UsersContext } from '../../../contexts/UsersContext';
import { displaySmallNums } from '../../../utils/maths';
import Avatar from '../../avatars/Avatar/Avatar';
import TweetsList from '../../lists/TweetsList/TweetsList';
import Skeleton from '../../loaders/Spinner/Skeleton';
import Header from '../Header/Header';
import './Profile.css';
import ProfileHero from './ProfileHero/ProfileHero';

const Profile = ({ match }) => {
  const { username } = match.params;
  const { fetchUserByUsername, currentUser, isFetching: fetchingUser, isFetched: fetchedUser } = useContext(UsersContext);
  const { fetchTweets, tweets: { currentUserTweets }, isFetching: fetchingTweets } = useContext(TweetsContext);
  const { displayName, avatar, email, emailVerified, uid, followers, following } = currentUser;

  useEffect(() => {
    fetchUserByUsername(username)
  }, [])

  useEffect(() => {
    fetchTweets({ queryParams: { username }, key: 'currentUserTweets' })
  }, [])

  return (
    <div className='profile__container'>
      <Header
        title={fetchingUser ? <Skeleton height={18} width={144} /> : displayName}
        subtitle={fetchingUser ? <Skeleton height={12} width={96} /> : displaySmallNums(currentUserTweets?.length, 'Tweet')}
        backButton
      />
      <ProfileHero
        uid={uid}
        displayName={fetchingUser ? <Skeleton height={18} width={144} /> : displayName}
        username={fetchingUser ? <Skeleton height={14} width={144} /> : `@${username}`}
        avatar={fetchingUser ? <Skeleton height={140} width={140} variant='circle' className='profileHero__avatar' /> : <Avatar src={avatar} alt={displayName} size='xxl' className='profileHero__avatar' />}
        email={email}
        emailVerified={emailVerified}
        followers={followers}
        following={following}
        uid={uid}
      />
      <TweetsList isLoading={fetchingTweets} tweets={currentUserTweets} />
    </div>
  )
}

export default Profile
