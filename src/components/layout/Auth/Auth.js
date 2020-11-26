import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import TwitterIcon from '../../../assets/icons/TwitterIcon';
import { AuthContext } from '../../../contexts/AuthContext';
import PrimaryButton from '../../buttons/PrimaryButton/PrimaryButton';
import Loading from '../Loading/Loading';
import './Auth.css';

const Auth = () => {
  const { isAuth, signInWithProvider, isFetching, isFetched } = useContext(AuthContext);

  const handleClick = () => {
    signInWithProvider('google')
  }

  if (isAuth) {
    return <Redirect to='/' />
  } else if (isFetched) {
    return (
      <div className='auth'>
        <div className='auth__hero'>
          <TwitterIcon className='auth__icon' />
          <div className='auth__text'>
            <h1 className='auth__header'>See what’s happening in <br />the world right now</h1>
          </div>
          <PrimaryButton disabled={isFetching} isLoading={isFetching} className='auth__button' onClick={handleClick}>Sign in with Google</PrimaryButton>
        </div>
      </div>
    )
  } else {
    return <Loading size='lg' />
  }
}

export default Auth
