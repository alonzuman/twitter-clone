import React, { useContext, useEffect } from 'react';
import { UsersContext } from '../../../contexts/UsersContext';
import Avatar from '../../avatars/Avatar/Avatar';
import Header from '../Header/Header';
import './Profile.css';
import ProfileHero from './ProfileHero';

const Profile = ({ match }) => {
  const { username } = match.params;
  const { fetchUserByUsername, currentUser, isFetching, isFetched } = useContext(UsersContext);
  const { displayName, avatar, email, emailVerified, uid } = currentUser;

  useEffect(() => {
    fetchUserByUsername(username)
  }, [])

  const user = {
    tweets: [
      1, 2, 3
    ]
  }

  return (
    <div className='profile__container'>
      <Header
        title={isFetching ? 'skeleton' : displayName}
        subtitle={isFetching ? 'skeleton' : `${user.tweets.length} Tweets`}
        backButton
      />
      <ProfileHero displayName={displayName} username={username} avatar={avatar} email={email} emailVerified={emailVerified} uid={uid} />
    </div>
  )
}

export default Profile
