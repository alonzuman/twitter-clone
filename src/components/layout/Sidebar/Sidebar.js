import React, { Suspense } from 'react'

const Sidebar = () => {
  return (
    <Suspense fallback={null}>
      <div role="side-bar" className='sideBar__wrapper'>
        <div />
      </div>
    </Suspense>
  )
}

export default Sidebar
