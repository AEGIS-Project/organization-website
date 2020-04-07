import React from 'react';

import TopNavBar from '../components/top-nav-bar.js'
import BannerPhoto from '../components/banner-photo.js'

function AboutUs() {
  return (
    <div>
      <TopNavBar />
      <BannerPhoto 
      	text='Our mission is to make educational resources more accessible for everyone' 
			/>

    </div>
  );
}

export default AboutUs;
