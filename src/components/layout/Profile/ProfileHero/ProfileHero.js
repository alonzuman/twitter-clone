import React, { useContext, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import MessageIcon from '../../../../assets/icons/MessageIcon';
import { MessagesContext } from '../../../../contexts/MessagesContext';
import { ProfileContext } from '../../../../contexts/ProfileContext';
import { UsersContext } from '../../../../contexts/UsersContext';
import useProfile from '../../../../hooks/useProfile';
import { displayBigNums } from '../../../../utils/maths';
import Avatar from '../../../avatars/Avatar/Avatar';
import IconButton from '../../../buttons/IconButton/IconButton';
import PrimaryButton from '../../../buttons/PrimaryButton/PrimaryButton';
import './ProfileHero.css';

const ProfileHero = ({
  uid,
  displayName,
  hero = 'https://pbs.twimg.com/profile_banners/25073877/1604214583/1500x500',
  avatar,
  username,
  bio = 'Officia sint et aliqua esse velit voluptate commodo aliquip qui aute excepteur sint eiusmod qui.',
  following = [],
  followers = [],
  currentUserProfile
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const currentUser = useProfile();
  const { followUser, unfollowUser } = useContext(UsersContext);
  const { startChat } = useContext(MessagesContext);
  const { push } = useHistory();
  const isFollowing = followers?.includes(currentUser.uid)

  const handleMessageClick = () => {
    startChat(currentUser, currentUserProfile);
    return push(`/messages/${currentUser.uid}-${uid}`);
  };
  const handleFollowClick = () => isFollowing ? unfollowUser(currentUser.uid, uid) : followUser(currentUser.uid, uid);

  return (
    <div className='profileHero__container'>
      <img src={hero} className='profileHero__banner' />
      <div className='profileHero__body'>
        <section className='profileHero__top'>
          {avatar}
          <div className='profileHero__controls'>
            {currentUser.uid !== uid && (
              <>
                <IconButton onClick={handleMessageClick} variant='outlined' className='profileHero__controlsIcon'>
                  <MessageIcon />
                </IconButton>
                <PrimaryButton onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} variant={isFollowing ? '' : 'outlined'} onClick={handleFollowClick}>
                  {!isFollowing ? 'Follow' : (isHovering ? 'Unfollow' : 'Following')}
                </PrimaryButton>
              </>)}
          </div>
        </section>
        <section className='profileHero__text'>
          <h1 className='profileHero__displayName'>{displayName}</h1>
          <h3 className='profileHero__username'>{username}</h3>
        </section>
        <section className='profileHero__bioContainer'>
          <p className='profileHero__bio'>{bio}</p>
        </section>
        <section className='profileHero__followsContainer'>
          <span className='profileHero__followsCounter'>{displayBigNums(following.length)}</span>
          <span className='profileHero__followsLabel'>Following</span>
          <span className='profileHero__followsCounter'>{displayBigNums(followers.length)}</span>
          <span className='profileHero__followsLabel'>Followers</span>
        </section>
      </div>
    </div>
  )
}

export default ProfileHero
