import React, { useContext } from 'react'
import { ProfileContext } from '../contexts/ProfileContext'

const useProfile = () => {
  const { user } = useContext(ProfileContext);
  return { ...user }
}

export default useProfile
