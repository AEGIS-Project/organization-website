import React, { useRef, useState, useEffect } from 'react';
import { Button } from 'antd';
import styles from '../styles/styles.module.css';
import './asymmetric-overlap-split.css';

function AsymmetricOverlapSplit({ img_src, title, description, link }) {
    return (
        <div className="asymmetric-overlap-split">
            <div className="bottom-block">
                <img
                    src={img_src}
                />
            </div>
            <div className="top-block">
                <div className="title"> {title} </div>
                <div className="description"> {description} </div>
                <Button type="primary" size="large">
                    <a href={link} target="_blank">Learn More</a> 
                </Button>
            </div>
        </div>
    );
}

export default AsymmetricOverlapSplit;
