import React from "react";
import { Button } from "antd";
import "./asymmetric-overlap-split.css";

function AsymmetricOverlapSplit({ img_src, title, description, link }) {
  return (
    <div className="asymmetric-overlap-split">
      <div className="bottom-block">
        <img src={img_src} alt="" />
      </div>
      <div className="top-block">
        <div className="title"> {title} </div>
        <div className="description"> {description} </div>
        <Button type="primary" size="large" style={{ background: "#e99e24" }}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            Learn More
          </a>
        </Button>
      </div>
    </div>
  );
}

export default AsymmetricOverlapSplit;
