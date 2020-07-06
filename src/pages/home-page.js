import React from 'react';
import {Divider} from 'antd';

import './home-page.css'

import TopNavBar from '../components/top-nav-bar.js'
import BannerPhoto from '../components/banner-photo.js'
import Footer from "../components/footer";
import TextSection from '../components/text-section.js'
import ContentContainer from "../components/content-container";

function HomePage() {
  return (
    <div>
        <TopNavBar />
        <BannerPhoto 
        	text='We build technologies that make hands-on educational experiences more accessible'
        />
        <ContentContainer>
			<TextSection
				title="OUR VISION"
				description="We envision a world where everyone has access to quality, hands-on educational experiences regardless of background"
			/>
			<Divider />
			<TextSection
				title="OUR MISSION"
				description="Our mission is to make quality educational experiences more accessible for everyone. We do this by building educational software technologies that support students to learn subjects that are often underrepresented in schools."
			/>
			<Divider />
			<TextSection
				title="OUR FOCUS"
				description={<div>
					<p><b>Accessibility:</b> We design all of our software to be available in the browser to everyone for free</p>
					<p><b>Active Learning:</b> We want to encourage hands-on learning experiences through educational technologies that engage the student in both active learning and passive learning. </p>
					<p><b>Cultivating Interests</b> We hope our technologies will help students explore and develop their interests.</p>
					</div>
				}
			/>
			<Divider />
		</ContentContainer>
        <Footer />
    </div>
  );
}

export default HomePage;
