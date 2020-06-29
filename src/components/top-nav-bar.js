import React, { useState , useRef , useContext } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

/**
* Main navigation bar
*/
function TopNavBar () {
  const [currentTab, setCurrentTab] = useState('')

  // Handle nav bar clicks
  const handleClick = click => {
    // Do nothing
  };

  return (
    <div>
      <div style={{display:"flex",
            flex:1,
            justifyContent:"flex-start"}}>

        <Menu onClick={handleClick}
            selectedKeys={[currentTab]}
            mode="horizontal"
            theme="light"
            style={{width:"100vw",
                  display:"flex",
                  flex:1,
                  alignContent:"center",
                  justifyContent:"center",
                  backgroundColor:"white",
                  fontSize:"16px",
                  fontFamily:"Lucida Console",
                  }}>
          <Menu.Item key="home" style={{marginRight:'auto'}}>
            <Link to={"/"}><b>The AEGIS Initiative</b></Link>
          </Menu.Item>

          <Menu.Item key="aboutus">
            <Link to={"/who-we-are"}>WHO WE ARE</Link>
          </Menu.Item>

          <Menu.Item key="mission">
            <Link to={"/what-we-do"}> WHAT WE DO</Link>
          </Menu.Item>

          <Menu.Item key="projects">
            <Link to={"/our-work"}> SEE OUR WORK</Link>
          </Menu.Item>

          <Menu.Item key="supportus">
            {//<Link to={"/support-us"}>SUPPORT US</Link>
            }
            SUPPORT US
          </Menu.Item>


        </Menu>
      </div>
    </div>
  );
}

export default TopNavBar
