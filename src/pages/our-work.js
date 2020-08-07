import React from 'react';
import { Button } from 'antd';
import { Card } from 'antd';

import TopNavBar from '../components/top-nav-bar.js'
import BannerPhoto from '../components/banner-photo.js'
import SectionHeader from '../components/section-header.js'
import AsymmetricOverlapSplit from '../components/asymmetric-overlap-split.js'
import Footer from "../components/footer";

function OurWork() {
    const { Meta } = Card;

  return (
    <div>
        <TopNavBar />
        <BannerPhoto 
            text='See the technologies we created'
        />
        <SectionHeader> Engineering </SectionHeader>
        <AsymmetricOverlapSplit 
            img_src="/robobot_gamepage_square.png"
            title="Robobot"
            description="An educational robotics coding platform with real-world physics in the browser!"
            link="http://lernrobotics.aegisinitiative.io"
        />
        <Footer />
        {/** <div style={{
            display:'flex',
            justifyContent:'center',
            backgroundColor: '#e8fffd'
        }}>
            <a href='http://lernrobotics.aegisinitiative.io'
                 target="_blank">
                <Card
                hoverable
                style={{ width: '800px',
                                 padding: '20px',
                                 margin: '20px',
                                 backgroundColor:'#d9fffb'
                                  }}
                cover={<img alt="example" 
                                        src="/robobot_gamepage.png" />}
                title="Robobot" >
                <Meta title="An educational robotics environment in the browser with real-world physics" description="" />
              </Card>
          </a>
      </div> */}
    </div>
  );
}

export default OurWork;
