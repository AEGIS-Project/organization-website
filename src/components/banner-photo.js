import React, { useEffect, useState } from "react";
import Fade from "react-reveal";
import { DownOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import styles from "../styles/styles.module.css";
import "./banner-photo.css";

function BannerPhoto({ text }) {
  const [showNext, setShowNext] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowNext(true);
    }, 1000);
  }, []);

  return (
    <div className="banner-photo">
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/**
          <img
            src={"/robobot_gamepage.png"}
            style={{
              opacity: "0.5",
              objectFit: "cover",
              backgroundSize: "cover",
            }}
            alt=""
          />
        */}

        <Row
          style={{
            position: "absolute",
            width: "70%",
            height: "100vh",
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
            <h1
              className={`${styles.banner_font} headline`}
              style={{ alignSelf: "center" }}
            >
              {" "}
              {text}{" "}
            </h1>
          </Col>
          <Col span={8}></Col>
          <div className="position-bottom">
            <Fade when={showNext}>
              <DownOutlined />
            </Fade>
          </div>
        </Row>
      </div>
    </div>
  );
}

export default BannerPhoto;
