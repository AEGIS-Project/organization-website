import React from 'react';

import './home-page.css'

import TopNavBar from '../components/top-nav-bar.js'
import BannerPhoto from '../components/banner-photo.js'

function HomePage() {
  return (
    <div>
      <TopNavBar />
      <BannerPhoto 
        text='We build accessible educational technologies' 
      />

    </div>
  );
}

export default HomePage;
