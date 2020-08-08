import React from "react";
import { Row, Col } from "antd";
import styles from "../styles/styles.module.css";

function BannerPhoto({ text }) {
  return (
    <div
      style={{
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {
          <img
            src={"/robobot_gamepage.png"}
            style={{
              opacity: "0.5",
              objectFit: "cover",
              backgroundSize: "cover",
            }}
            alt=""
          />
        }

        <Row
          style={{
            position: "absolute",
            top: "0px",
            width: "60%",
            height: "100%",
          }}
        >
          <Col
            span={16}
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <h1 className={styles.banner_font} style={{ alignSelf: "center" }}>
              {" "}
              {text}{" "}
            </h1>
          </Col>
          <Col span={8}></Col>
        </Row>
      </div>
    </div>
  );
}

export default BannerPhoto;
