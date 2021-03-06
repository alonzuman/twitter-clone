import React, { useContext } from 'react';
import firebase from 'firebase';
import { Redirect } from 'react-router-dom';
import TwitterIcon from '../../../assets/icons/TwitterIcon';
import PrimaryButton from '../../buttons/PrimaryButton/PrimaryButton';
import Loading from '../SplashScreen/SplashScreen';
import './Auth.css';
import { auth } from '../../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Auth = () => {
  const [user, loading] = useAuthState(auth)

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  const continueAsGuest = () => {
    auth.signInAnonymously();
  }

  if (user) {
    return <Redirect to='/' />
  } else if (!loading) {
    return (
      <div className='auth'>
        <div className='auth__hero'>
          <TwitterIcon className='auth__icon' />
          <div className='auth__text'>
            <h1 className='auth__header'>See what’s happening in <br />the world right now</h1>
          </div>
          <PrimaryButton disabled={loading} isLoading={loading} className='auth__button' onClick={signInWithGoogle}>Sign in with Google</PrimaryButton>
          <PrimaryButton onClick={continueAsGuest} className='auth__button' variant='outlined'>Continue as Guest</PrimaryButton>
        </div>
      </div>
    )
  } else {
    return <Loading size='lg' />
  }
}

export default Auth
