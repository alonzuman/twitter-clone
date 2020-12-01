import React from 'react';
import Feed from '../Feed/Feed';
import Sidebar from '../Sidebar/Sidebar';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <Feed />
      <Sidebar />
    </div>
  )
}

export default Home
