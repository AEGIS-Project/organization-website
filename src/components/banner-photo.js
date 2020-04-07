import React, { useRef, useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import styles from '../styles/styles.module.css';

function BannerPhoto({text}) {
	const msg = 
		<h2 className={styles.banner_font}>
    	{text}
    </h2>

  return (
    <div style={{backgroundColor:"black",
  							 display:'flex',
  							 alignItems:'center',
  							 justifyContent:'flex-start',
  							 overflowX:'hidden'}}>

      <img src={'/robobot.png'}
           style={{opacity:'0.5', 
            		 	 objectFit:'cover',
            		 	 backgroundSize:'cover'}} />

      <Row style = {{position: 'absolute',
    								 paddingLeft:'10vw'}}>
      	<Col span={16}>
      		{msg}
      	</Col>
      	<Col span={8}>
      	</Col>
      </Row>

    </div>
  );
}

export default BannerPhoto;
