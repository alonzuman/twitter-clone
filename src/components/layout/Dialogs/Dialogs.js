import React, { Suspense } from 'react'
import MoreDialog from '../../menus/MoreDialog'
import ReplyDialog from '../Reply/ReplyDialog'
import TweetDialog from '../Tweet/TweetDialog'

const Dialogs = () => {
  return (
    <>
      <Suspense fallback={null}>
        <TweetDialog />
      </Suspense>
      <Suspense fallback={null}>
        <ReplyDialog />
      </Suspense>
      <Suspense fallback={null}>
        <MoreDialog />
      </Suspense>
    </>
  )
}

export default Dialogs
