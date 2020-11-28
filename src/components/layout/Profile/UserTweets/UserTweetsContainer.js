import React, { Suspense, useContext, useEffect } from 'react'
import { TweetsContext } from '../../../../contexts/TweetsContext';
import TweetsList from '../../../lists/TweetsList/TweetsList';
import Spinner from '../../../loaders/Spinner/Spinner'

const UserTweetsContainer = ({ username }) => {
  const { fetchTweets, tweets: { currentUserTweets }, isFetching, isFetched } = useContext(TweetsContext);

  useEffect(() => {
    fetchTweets({ queryParams: { username }, key: 'currentUserTweets' })
  }, [])

  return (
    <Suspense fallback={<Spinner />}>
      <TweetsList isLoading={isFetching} tweets={currentUserTweets} />
    </Suspense>
  )
}

export default UserTweetsContainer
