import React from 'react';
import { Button } from 'antd';
import { Card } from 'antd';

import TopNavBar from '../components/top-nav-bar.js'
import BannerPhoto from '../components/banner-photo.js'


function OurWork() {
	const { Meta } = Card;

  return (
    <div>
      <TopNavBar />
      <BannerPhoto 
      	text='See the technologies we create.'
			/>
			<div style={{
				display:'flex',
				justifyContent:'center',
				backgroundColor: '#e8fffd'
			}}>
				<a href='http://robobot-react-app.herokuapp.com'
					 target="_blank">
					<Card
				    hoverable
				    style={{ width: '40vw',
				    				 padding: '20px',
				    				 margin: '20px',
				    				 backgroundColor:'#d9fffb'
				    				  }}
				    cover={<img alt="example" 
				    						src="/robobot.png" />}
				    title="Robobot" >
				    <Meta title="An educational robotics environment in the browser with real-world physics" description="" />
				  </Card>
			  </a>
		  </div>
    </div>
  );
}

export default OurWork;
