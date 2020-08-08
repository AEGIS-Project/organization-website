import React, { useEffect, useState } from "react";
import Fade from "react-reveal";
import { DownOutlined } from "@ant-design/icons";
import { Divider } from "antd";

import TopNavBar from "../components/top-nav-bar.js";
import AsymmetricOverlapSplit from "../components/asymmetric-overlap-split.js";
import Footer from "../components/footer";
import FillSpace from "../components/fill_space";
import SectionHeader from "../components/section-header";

import "./our-work.css";

function OurWork() {
  const [showNext, setShowNext] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowNext(true);
    }, 1000);
  }, []);

  return (
    <div className="site-layout-content our-work">
      {/**<BannerPhoto text="See the technologies we created" />
      <SectionHeader> Engineering </SectionHeader>
      */}
      <FillSpace
        backgroundColor="#1B1B1B"
        style={{ position: "absolute", top: "0" }}
      >
        <div style={{ position: "absolute", top: "0" }}>
          {" "}
          <TopNavBar />{" "}
        </div>
        <Fade bottom>
          <div>
            <div className="banner-title">SEE OUR WORK</div>
            <div className="position-bottom">
              <Fade when={showNext}>
                <DownOutlined />
              </Fade>
            </div>
          </div>
        </Fade>
      </FillSpace>
      <FillSpace
        backgroundColor="#e8f0fb"
        style={{ position: "absolute", top: "0" }}
        height="80vh"
      >
        <Fade bottom>
          <div>
            <div className="product-series-header">Project LERN</div>

            <div className="product-series-description">
              The LERN series is our effort to create accessible free
              educational software on a wide range of topics
            </div>
          </div>
        </Fade>
      </FillSpace>
      <FillSpace backgroundColor="#e6ffff">
        <AsymmetricOverlapSplit
          img_src="/robobot_gamepage_square.png"
          title="LERNrobotics"
          description="An educational robotics coding platform with real-world physics in the browser!"
          link="http://lernrobotics.aegisinitiative.io"
        />
      </FillSpace>
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
