import React from 'react';
import { displayBigNums } from '../../../utils/maths';
import Avatar from '../../avatars/Avatar/Avatar';
import './ProfileHero.css';

const ProfileHero = ({
  displayName,
  hero = 'https://pbs.twimg.com/profile_banners/25073877/1604214583/1500x500',
  avatar,
  username,
  bio = 'Officia sint et aliqua esse velit voluptate commodo aliquip qui aute excepteur sint eiusmod qui.',
  following = 243,
  followers = 2493938
}) => {
  return (
    <div className='profileHero__container'>
      <img src={hero} className='profileHero__banner' />
      <div className='profileHero__body'>
        <Avatar src={avatar} alt={displayName} size='xxl' className='profileHero__avatar' />
        <section className='profileHero__text'>
          <h1 className='profileHero__displayName'>{displayName}</h1>
          <h3 className='profileHero__username'>@{username}</h3>
        </section>
        <section className='profileHero__bioContainer'>
          <p className='profileHero__bio'>{bio}</p>
        </section>
        <section className='profileHero__followsContainer'>
          <span className='profileHero__followsCounter'>{displayBigNums(following)}</span>
          <span className='profileHero__followsLabel'>Following</span>
          <span className='profileHero__followsCounter'>{displayBigNums(followers)}</span>
          <span className='profileHero__followsLabel'>Followers</span>
        </section>
      </div>
    </div>
  )
}

export default ProfileHero
