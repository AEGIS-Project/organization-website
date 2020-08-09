import React, { useEffect, useState } from "react";
import Fade from "react-reveal";
import { DownOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import styles from "../styles/styles.module.css";
import "./banner-photo.css";

function BannerPhoto({ title, text }) {
  const [showNext, setShowNext] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowNext(true);
    }, 1000);
  }, []);

  return (
    <div className="banner-photo">
      <Row
        style={{
          marginLeft: "15%",
          width: "70%",
          height: "100%",
        }}
      >
        <Col
          span={16}
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Fade right>
            <h1
              className={`${styles.banner_font} headline`}
              style={{ alignSelf: "start", borderBottom: "1.5px solid white" }}
            >
              {" "}
              {title}{" "}
            </h1>
          </Fade>
          <Fade bottom>
            <h1
              className={`${styles.banner_font} headline`}
              style={{ alignSelf: "center" }}
            >
              {" "}
              {text}{" "}
            </h1>
          </Fade>
        </Col>
        <Col span={8}></Col>
        <div className="position-bottom">
          <Fade when={showNext}>
            <DownOutlined />
          </Fade>
        </div>
      </Row>
    </div>
  );
}

export default BannerPhoto;
